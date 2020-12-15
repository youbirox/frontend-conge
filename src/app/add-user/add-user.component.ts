import { Component, OnInit, ViewChild, Optional } from '@angular/core';
import { AuthentificationService, UserDetails,ToeknPayload } from '../authentification.service'
import { Subject } from 'rxjs';
import {DataTableDirective} from 'angular-datatables'
import { Router } from "@angular/router";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'
import { ProfileComponent } from '../profile/profile.component';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  dataSource : MatTableDataSource<any>;
  angForm: FormGroup
  credentials: ToeknPayload = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    date_recrutement:"",
    type:""
  };
  details: UserDetails
  
  constructor(private auth: AuthentificationService, private router: Router,private dialog:MatDialog, @Optional() public dialogRef: MatDialogRef<AddUserComponent>) {}
  register() {
    this.auth.register(this.credentials).subscribe(
      (data) => {

          /*this.dataSource.data.push(
            {
              id: this.credentials.id,
              first_name: this.credentials.first_name,
              last_name: this.credentials.last_name,
              email: this.credentials.email,
              type: this.credentials.type,
            }
          )*/
          // ila kenti katgeneri l'id men lbackend (auto intcrement) dir lbackend yreturni lik f response user created w pushih f dataSource.data
          // this.router.navigateByUrl("/utilisateurs"); 
          this.onClose();
       // this.router.navigateByUrl("/utilisateurs");
        
        //console.log(data);
      },
      err => {
        console.error(err);
      }
    );
  }
  onClose(){

    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
