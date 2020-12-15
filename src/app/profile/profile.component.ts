import { Component, OnInit, ViewChild, Optional } from '@angular/core';
import { AuthentificationService, UserDetails,ToeknPayload } from '../authentification.service'
import { Subject } from 'rxjs';
import {DataTableDirective} from 'angular-datatables'
import { Router } from "@angular/router";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MatCardModule, MatSort,MatDialogModule, MatToolbarModule, MatIconModule, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'
import { AddUserComponent } from '../add-user/add-user.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DemandeCongeComponent } from '../demande-conge/demande-conge.component';
@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  details: UserDetails
  Edited=false  
  notification

  his
  constructor(private auth: AuthentificationService, private router: Router,private dialog:MatDialog,@Optional() public dialogRef: MatDialogRef<DemandeCongeComponent>) {}
  
  ngOnInit() { 
   // this.his=localStorage.getItem('PasswordLogin')
    //console.log(this.his)


this.auth.countEnAttente().subscribe(
  count=>{
    if (count>0) {
      this.Edited=true
      this.notification=count
    }
    
  }
)

    this.auth.profile().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )

  }
  verifier()
  {
    if (this.auth.getUserDetails().type=="Administrateur") {
      return true
    }else
    {
      return false
    }
  }
  Open(){
    
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(DemandeCongeComponent,dialogConfig)
    
    
  }

}