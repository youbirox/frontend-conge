import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { AuthentificationService, UserDetails,ToeknPayload, CongeDetails } from '../authentification.service'
import { FormGroup,  FormBuilder,  Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { Subject } from 'rxjs';
import { MatCardModule, MatSort,MatDialogModule, MatToolbarModule, MatIconModule, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'

import {MatTableDataSource} from '@angular/material/table';
import {DataTableDirective} from 'angular-datatables'
import {MatPaginator} from '@angular/material/paginator';
import { ProfileComponent } from '../profile/profile.component';
import { EditcongeComponent } from '../editconge/editconge.component';

@Component({
  selector: 'app-refus',
  templateUrl: './refus.component.html',
  styleUrls: ['./refus.component.css']
})
export class RefusComponent implements OnInit {


  Allconge: CongeDetails

  displayedColumns = ['Etat','Nom','date_debut','date_fin','Nbrjours','commentaire','type','created','actions'];
  dataSource : MatTableDataSource<any>;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private auth: AuthentificationService, private formBuilder: FormBuilder,private dialog:MatDialog,@Optional() public dialogRef: MatDialogRef<RefusComponent>) { }
  
  
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
  allconge()
  {
   
    this.auth.getCongeAllRefuss().subscribe(
      
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
  ngOnInit() {
    this.auth.getCongeAllRefus().subscribe(
      conge=>
      {
        this.Allconge=conge
        this.dataSource=new MatTableDataSource(conge)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dtTrigger.next();
      }
    )
  }

}
