import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule, MatSort,MatDialogModule, MatToolbarModule, MatIconModule, MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { AuthentificationService, CongeDetails,HistoriqueDetails,UserDetails } from '../authentification.service';
import {MatTableDataSource} from '@angular/material/table';
import {DataTableDirective} from 'angular-datatables'
import {MatPaginator} from '@angular/material/paginator';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-editconge',
  templateUrl: './editconge.component.html',
  styleUrls: ['./editconge.component.css']
})
export class EditcongeComponent implements OnInit {
  
  credential: HistoriqueDetails = {
    id:0,
    userId:0,
    congeId:'',
    commentaire:'',
    user_name:'' ,
    EtatHistory:'',
    date_creation:''
    
   };
  _id:string='';
  dataSource : MatTableDataSource<any>;
  angForm: FormGroup
  credentials: CongeDetails
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  Edited=true
  other
  Historys
  Etat
  details:UserDetails
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  Allconge: CongeDetails
  constructor(private auth: AuthentificationService, private formBuilder: FormBuilder,private dialog:MatDialog,@Optional() public dialogRef: MatDialogRef<EditcongeComponent>,@Inject(MAT_DIALOG_DATA) data) 
  { 
    this.other=data
  }
  update(credentials:CongeDetails){
   
    this.credential.userId=this.details.id
    this.credential.user_name=this.details.first_name
    this.credential.congeId=this.other.id
    this.Etat=credentials.Etat
  
  console.log(this.Etat)
    this.credential.EtatHistory=this.Etat
    this.auth.AddHistorique(this.credential).subscribe(
      history => {
        
      },
      err => {
        console.error(err)
      }

      
    )

    if(confirm('Vous voulez vraiment modifier cette ligne ?')){
    this.auth.update(this.other.id,credentials).subscribe(
      (data) => {
        //console.log(credentials)
        
        this.dialogRef.close();
        this.Edited=false
      }, 
      err => {
        console.error(err);
      }
    );

    
  }
  
  
  }
  verifierTLV()
  {
    if (this.auth.getUserDetails().type=="RESPONSABLE_TLV") {
      console.log(this.auth.getUserDetails().type)
      return true
    }else
    {
      return false
    }
  }
  verifier()
  {
    if (this.auth.getUserDetails().type=="Administrateur") {
      return true
    }if(this.auth.getUserDetails().type=="RESPONSABLE_TLV")
    {
      return true
    }
    else
    {
      return false
    }
  }
  ngOnInit() {

    this.auth.profile().subscribe(
      user => {
        this.details = user

      },
      err => {
        console.error(err)
      }
      
    )  
    //console.log(this.other.userId)
    this.auth.GetIdConge(this.other.id).subscribe(
      (data) => {
        //console.log(data.historiques)

        this.Historys=data.historiques
        this.Etat=data.Etat
      }, 
      err => {
        console.error(err);
      }
    );
    this.angForm = this.formBuilder.group({
      'Etat' : [this.other.Etat],
      'type' : [this.other.type],
      'date_debut' : [this.other.date_debut],
      'date_fin' : [this.other.date_fin],
      'Nbrjours' : [this.other.Nbrjours],
      'commentaire' : [this.other.commentaire],
      //'historique' : [this.other.historiques.historique],
     
    });
  }

}
