import { Component } from "@angular/core";
import { AuthentificationService, ToeknPayload } from "../authentification.service";
import { Router } from "@angular/router";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  templateUrl: "./register.component.html"
})
export class RegisterComponent {
  angForm: FormGroup
  credentials: ToeknPayload = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    type:"",
    date_recrutement:""
  };
 
  constructor(private auth: AuthentificationService, private router: Router)
   {
    
   }
  

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/profile");
      },
      err => {
        console.error(err);
      }
    );
  }
  
}