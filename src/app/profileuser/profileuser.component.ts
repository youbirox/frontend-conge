import { Component, OnInit } from '@angular/core';
import { AuthentificationService, UserDetails } from '../authentification.service'
import * as moment from 'moment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profileuser',
  templateUrl: './profileuser.component.html',
  styleUrls: ['./profileuser.component.css']
})
export class ProfileuserComponent implements OnInit {
  details: UserDetails
  totalmois
  totaljoursconge
  reliquat
  count
  sum=0
  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    /*this.auth.count().subscribe(
      conge =>{
        this.count= conge
      },
      err => {
        console.error(err)
      }
    )*/

    this.auth.sum().subscribe(
      conge =>{
        
        this.sum= conge
      },
      err => {
        console.error(err)
      }
    )


    this.auth.profile().subscribe(
      async  user => {
        this.details = user
        //console.log(user.date_recrutement);
       const DR=user.date_recrutement;
       const TD=Date.now();
       const DRR=moment(DR);
       const TDD=moment(TD);
       this.totalmois = TDD.diff(DRR, "months");
       this.totaljoursconge=this.totalmois*1.5;

       this.reliquat= await this.totaljoursconge-this.sum;

       //console.log(months);
      },
      err => {
        console.error(err)
      }
    )

    //let datenow = Date.now();
   //this.totalmois=moment(datenow).toDate().getFullYear();
   //this.totalmois.diff(this.details.date_recrutement, "days")

   
   
  }

}
