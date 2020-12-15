import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})

export class ParametreComponent implements OnInit {
API
APIError
annee
  constructor(private auth: AuthentificationService) { }
  Afficher()
  {
    this.auth.showApi('guadeloupe',this.annee).subscribe(
      API => {
        
          this.API=API
       
       
        //console.log(API)
      },
      err => {
        this.APIError='Ya aucun jour fériée dans cette année'
        this.API=''
        console.error(err)
      }
    )
  }
  ngOnInit() {
   
    
  }

}
