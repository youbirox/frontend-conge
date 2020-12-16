import { Component } from '@angular/core'
import { AuthentificationService, ToeknPayload } from '../authentification.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: ToeknPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    date_recrutement:'',
    type:''
  }

  err=''

  constructor(private auth: AuthentificationService, private router: Router) {}

  login() {
    //localStorage.setItem('PasswordLogin',this.credentials.password)
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
      },
      err => {
        this.err='Votre Email ou le mot de pass sont incorrect !'
      }
    )
  }
}