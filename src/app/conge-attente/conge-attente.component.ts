import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { AuthentificationService, UserDetails,ToeknPayload, CongeDetails ,HistoriqueDetails} from '../authentification.service'
import { FormGroup,  FormBuilder,  Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { Subject } from 'rxjs';
import { MatCardModule, MatSort,MatDialogModule, MatToolbarModule, MatIconModule, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'

import {MatTableDataSource} from '@angular/material/table';
import {DataTableDirective} from 'angular-datatables'
import {MatPaginator} from '@angular/material/paginator';
import { ProfileComponent } from '../profile/profile.component';
import { EditcongeComponent } from '../editconge/editconge.component';
@Component({
  selector: 'app-conge-attente',
  templateUrl: './conge-attente.component.html',
  styleUrls: ['./conge-attente.component.css']
})
export class CongeAttenteComponent implements OnInit {
  details: UserDetails
  displayedColumns = ['Etat','Nom','date_debut','date_fin','Nbrjours','commentaire','type','created','actions','valider'];
  dataSource : MatTableDataSource<any>;
  angForm: FormGroup
  credentials: CongeDetails
  _id:string='';
  Etat:string='';
  //Type:string='';
  ID:string;
  credential: HistoriqueDetails = {
    id:0,
    userId:0,
    congeId:'',
    commentaire:'',
    user_name:'' ,
    EtatHistory:'',
    date_creation:''
    
   };
   
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  Allconge: CongeDetails
  W
  Edited=false
  constructor(private auth: AuthentificationService, private formBuilder: FormBuilder,private dialog:MatDialog,@Optional() public dialogRef: MatDialogRef<CongeAttenteComponent>) { }
  
  Valide(id)
  {
    if(confirm('Vous voulez vraiment valider le conge ?')){
      this.credential.userId=this.details.id
    this.credential.user_name=this.details.first_name
    this.credential.congeId=id
   //this.Etat=this.credentials.Etat
  
  //console.log(this.Etat)
    this.credential.EtatHistory='Validé'
      this.auth.AddHistorique(this.credential).subscribe(
        history => {
          
        },
        err => {
          console.error(err)
        }
  
        
      )
      this.auth.updateDirect(id,this.W).subscribe(
        (data) => {
        }, 
        err => {
          console.error(err);
        }
      );
    }
   // window.location.reload()
  }
  refus(id)
  {
    if(confirm('Vous voulez vraiment valider le conge ?')){
      this.credential.userId=this.details.id
    this.credential.user_name=this.details.first_name
    this.credential.congeId=id
   //this.Etat=this.credentials.Etat
  
  //console.log(this.Etat)
    this.credential.EtatHistory='Refus'
      this.auth.AddHistorique(this.credential).subscribe(
        history => {
          
        },
        err => {
          console.error(err)
        }
  
        
      )
      this.auth.refusDirect(id,this.W).subscribe(
        (data) => {
        }, 
        err => {
          console.error(err);
        }
      );
    }
  }
  
  allconge()
  {
   
    this.auth.getAllConge().subscribe(
      
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
  /*Open(){
    
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    dialogConfig.width="50%";
    dialogConfig.data='ffff';
    //this.dialog.open(EditcongeComponent,dialogConfig);
    const dialogRef = this.dialog.open(EditcongeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", dialogConfig.data)
  );      
  }*/

  verifier()
  {
    if (this.auth.getUserDetails().type=="Administrateur") {
      return true
    }if (this.auth.getUserDetails().type=="RESPONSABLE_TLV") {
      //console.log(this.auth.getUserDetails().type)
      return true
    }else
    {
      return false
    }
  }
  verifierTLV()
  {
    if (this.auth.getUserDetails().type=="RESPONSABLE_TLV") {
      //console.log(this.auth.getUserDetails().type)
      return true
    }else
    {
      return false
    }
  }
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
  getid(id)
  {
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

 
  ngOnInit() {


    //console.log(this.auth.getUserDetails().type)
    this.auth.profile().subscribe(
      user => {
        this.details = user
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
   
   
    this.auth.getCongeAll().subscribe(
      
      conge=>{
        //let X=this.details.id;
        //console.log(conge);
        //console.log(this.ID);
        //console.log( this.details.id);
        //console.log(this.ID);
        this.Allconge=conge
        this.dataSource=new MatTableDataSource(conge)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dtTrigger.next();

      }

    )
  }

}