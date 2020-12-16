import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { AuthentificationService, UserDetails,ToeknPayload, CongeDetails } from '../authentification.service'
import { FormGroup,  FormBuilder,  Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { MatCardModule, MatSort,MatFormFieldModule,MatDialogModule, MatToolbarModule, MatIconModule, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'
import { Subject } from 'rxjs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableDataSource} from '@angular/material/table';
import {DataTableDirective} from 'angular-datatables'
import {MatPaginator} from '@angular/material/paginator';
import { CongeAttenteComponent } from '../conge-attente/conge-attente.component';
import { EditcongeComponent } from '../editconge/editconge.component';
import * as CanvasJS from './canvasjs.min';
import * as moment from 'moment';

@Component({
  selector: 'app-conge-valide',
  templateUrl: './conge-valide.component.html',
  styleUrls: ['./conge-valide.component.css']
})


export class CongeValideComponent implements OnInit {
 
  details: UserDetails
  detailsid: UserDetails
  displayedColumns = ['Etat','Nom','date_debut','date_fin','Nbrjours','commentaire','type','created','actions'];
  dataSource : MatTableDataSource<any>;
  angForm: FormGroup
  //credentials: CongeDetails
  _id:string='';
  Etat:string='';
  //Type:string='';
  ID:string;
  dataPoints
  
   
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  Allconge: CongeDetails
  
  Edited=false
  Show=false
  dateD
  dateR
  credentials: CongeDetails = {
    id:0,
    date_debut: "",
    date_fin: "",
    commentaire: "",
    Nbrjours: 0,
    Etat: "",
    type: "",
    userId:0
    
   };
  constructor(private auth: AuthentificationService, private formBuilder: FormBuilder,private dialog:MatDialog,@Optional() public dialogRef: MatDialogRef<CongeValideComponent>) { }
  Recherche()
  {

    //this.dataSource=new MatTableDataSource(conge)
        // this.dataSource=new MatTableDataSource(user)
         
    //console.log(this.credentials)
    /*if (this.credentials.date_fin) {
      this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
         this.dataSource.filter = this.credentials.date_fin.valueOf();
         this.dtTrigger.next();
    }if (this.credentials.date_debut) {
      this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
         this.dataSource.filter = this.credentials.date_debut.valueOf();
         this.dtTrigger.next();
    } */
    
    this.auth.CongeBetween(this.credentials).subscribe(
      conge => 
      { 
        this.Allconge=conge
        this.dataSource=new MatTableDataSource(conge)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dtTrigger.next();
      }
    )

    
    
   

    
  }

  allconge()
  {
   
    this.auth.getAllCongevalide().subscribe(
      
    conge=>{ 

      this.Allconge=conge
      this.dataSource=new MatTableDataSource(conge)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dtTrigger.next();
      //console.log(conge.id)
    }

  )

  }
  verifier()
  {
    if (this.auth.getUserDetails().type=="Administrateur") {
      return true
    }if (this.auth.getUserDetails().type=="RESPONSABLE_TLV") {
      return true
    }if (this.auth.getUserDetails().type=="RESPONSABLE_GESTION") {
      return true
    }else
    {
      return false
    }
  }
   getid(id)
  {

    //console.log(id)
    /*this.auth.getHistorique(id).subscribe(

      (history)=>{
        
        console.log(history)
      }
    )*/

    this.auth.GetIdConge(id).subscribe(
      
      (data)=>{
        
        const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    dialogConfig.width="80%";
    dialogConfig.data=data;
    //this.dialog.open(EditcongeComponent,dialogConfig);
    const dialogRef = this.dialog.open(EditcongeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.ngOnInit()
  );
         
      }
    )
  }
  /*update(credentials:CongeDetails){
     
    //console.log(idr);
    if(confirm('Are you sure to update this record ?')){
    this.auth.update(this._id,credentials).subscribe(
      (data) => {
        //p='aaaaaaaaaaaaa'
       
        //console.log(data)
        this.auth.getCongeAll().subscribe(
          conge=>{
            this.Allconge=conge
            this.dataSource=new MatTableDataSource(conge)
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.dtTrigger.next();
          }
    
        ) 
        this.Edited=false
        // console.log(data);  
        // this.router.navigateByUrl("/utilisateurs");
       
      },
      err => {
        console.error(err);
      }
    );
  }
  }*/
  delete(idr){
     
    //console.log(idr);
    if(confirm('Vous voulez vraiment supprimer cette ligne?')){
    this.auth.deleteConge(idr).subscribe(
      (data) => {
        if(data == 1){
          this.dataSource.data = this.dataSource.data.filter(
            (conge)=>{
              return conge.id != idr
            }
          )
        }
        // console.log(data);  
        // this.router.navigateByUrl("/utilisateurs");
       
      },
      err => {
        console.error(err);
      }
    );
  }
  }
 
  ngOnInit() {

    console.log(this.auth.getUserDetails().type) 
    
    ///////////////////////
    this.auth.AllUsers().subscribe(
      user => {
        this.detailsid = user      
      },
      err => {
        console.error(err)
      }
    )
    this.auth.profile().subscribe(
      user => {
        this.details = user
        //console.log(this.details)
      },
      err => {
        console.error(err)
      }
    )
    
    this.auth.profile().subscribe(
      user => {
         this.ID =user.id;
        //var B = this.credentials.userId =user.id;

       //console.log(ID);
        //console.log(B);
      
      },
      err => {
        console.error(err)
      }
    )
  
    this.angForm = this.formBuilder.group({
      'Etat' : [null, Validators.required],
     
    });
    //console.log('teeee'+this._id);
    var  X=this.ID;
   
   
    this.auth.conge_valide().subscribe(
      
      conge=>{
        let X=this.details.id;
        //console.log(X);
        //console.log(this.ID);
        //console.log( this.details.id);
        //console.log(this.ID);
        this.Allconge=conge
        this.dataSource=new MatTableDataSource(conge)
       /* this.dataSource.filterPredicate = 
         (data: Element, filter: string) => data.id.indexOf(filter) != -1;*/
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dtTrigger.next();
        
      }

    )

    
  } 
  applyFilter(filterValue: string) {
    this.Show=true
   //filterValue = filterValue.trim(); // Remove whitespace
   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  
  this.auth.getAllCongevalide().subscribe(
      
    conge=>{ 


      //console.log(conge)
      //this.Allconge=conge
      this.dataSource=new MatTableDataSource(conge)
     // this.dataSource=new MatTableDataSource(user)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filter = filterValue.valueOf();
      this.dtTrigger.next();
      //console.log(this.dataSource.filter)
      //console.log(this.dataSource)

      this.auth.GetNomConge(this.dataSource.filter).subscribe(
        congeNom=>{
          const  DR=congeNom.user.date_recrutement;
          //console.log(DR);
          const TD=Date.now();
         // console.log(TD);
          const DRR=moment(DR);
          const TDD=moment(TD);
          const totalmois = TDD.diff(DRR, "months");
          //console.log(totalmois);
          const totaljoursconge=totalmois*1.5;
          const reliquat=totaljoursconge-congeNom.SUM;

         // console.log(reliquat);
          let chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2",
            animationEnabled: true,
            exportEnabled: true,
            title:{
              text: "Détails"
            },
            data: [{
              type: "pie",
              showInLegend: true,
              toolTipContent: "<b>{name}</b>: {y} Jours (#percent%)",
              indexLabel: "{name} - #percent%",
              dataPoints: [
                { y: congeNom.SUM, name: "Cumul" },
                { y: totalmois, name: "Total de mois travaillé" },
                { y: totaljoursconge, name: "Total de jours congé" },
                { y: reliquat, name: "Reliquat" }
              ]
            }]
          });
            
          chart.render();


        }
      )
    }

  )

   
 }

}
