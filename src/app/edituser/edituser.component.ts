import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, ThemePalette } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService,UserDetails } from '../authentification.service';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  color: ThemePalette = 'primary';
  angForm: FormGroup
  other
  his
  
  credentials: UserDetails
  checked=false
  constructor(private auth: AuthentificationService, private formBuilder: FormBuilder,private dialog:MatDialog,@Optional() public dialogRef: MatDialogRef<EdituserComponent>,@Inject(MAT_DIALOG_DATA) data) 
  { 
    this.other=data
  }
  xxx(){
    console.log('ok ok')
  }
  update(credentials:UserDetails){

    if(confirm('Vous voulez vraiment modifier cette ligne ?')){
    this.auth.updateUser(this.other.id,credentials).subscribe(
      (data) => {
        this.dialogRef.close();
      }, 
      err => {
        console.error(err);
      }
    );
  }
  }
  ngOnInit() {
    if (this.other.first_name=='Ayoub') {
      this.checked=true
    }
    
   // this.his=localStorage.getItem('PasswordLogin')
    this.angForm = this.formBuilder.group({
      'first_name' : [this.other.first_name],
      'last_name' : [this.other.last_name],
      'email' : [this.other.email],
      'password' : [this.other.password],
      'type' : [this.other.type],
      'date_recrutement' : [this.other.date_recrutement],
      'checked' : [this.checked],
    });
  }

}
