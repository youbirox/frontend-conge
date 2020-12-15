import { Component, OnInit, Optional } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AuthentificationService,UserDetails, CongeDetails ,ToeknPayload } from '../authentification.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import * as moment from 'moment';

import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'
import { any } from 'sequelize/types/lib/operators';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {
 
  //public date_debut;
  //public date_fin;
  //public Nbrjours=0;
    
    
   //Ferier:[];
   angForm: FormGroup
   credentials: CongeDetails = {
    id:0,
    date_debut: "",
    date_fin: "",
    commentaire: "",
    Nbrjours: 0,
    Etat: "",
    type: "",
    userId:0
    
   };
   myObjArray = [
    {}
    
  ];
  Messages = [];
   
   ID
   nbrJ
   enable=false
   enableJ=false
  constructor(private dialog:MatDialog,private auth: AuthentificationService, @Optional() public dialogRef: MatDialogRef<DemandeCongeComponent>) { }

  calculateBusinessDays()
  {
    const A=moment(this.credentials.date_fin);
    const B=moment(this.credentials.date_debut);
    const days = A.diff(B, "days") + 1;
    const year=A.year();
      ////////////// Jour Fériée //////////////////////


      this.auth.showApiALL().subscribe(
        API => {
         
          
          
              let newDay: any = B.toDate(),
             
              workingDays: number = 0,
              sundays: number = 0,
              saturdays: number = 0,
              x : number = 0;
              //console.log(newDay);
                      for (let i = 0; i < days; i++) {
                          const day = newDay.getDay();
                        // console.log(day)
                         
                          newDay = B.add(1, "days").toDate();
                          let newDayE = B.add(0, "days").toDate().toJSON();
                           newDayE = newDayE.slice(0, -14);
                          this.myObjArray.push({DateComplet:newDayE})
                         // console.log(newDay)
                          //console.log(newDay);
                          const isWeekend = ((day % 6) === 0);
                          if (!isWeekend) {
                                  workingDays++;
                          } 
                          
                          else {
                                  if (day === 6) saturdays++;
                                  if (day === 0) sundays++;
                          }        
                          
    }
    //console.log(this.myObjArray[1]['DateComplet'])
   
    /*for(let key1 in this.myObjArray )
    {
      let comprDate = this.myObjArray[key1]['DateComplet']
      //console.log(this.myObjArray)
      for(let key in API) {
        // Whatever you want to do with key or obj[key]
        //console.log(key)
        
        if (comprDate==key) {

         // console.log('jour fériée a été trouvé'+comprDate+'='+key)
         
          x++
         
          console.log(x)
        } else {
          
        }
     
    }
    }*/
   
   
   //console.log(API)
       // console.log("Total Days:", days, "workingDays", workingDays, "saturdays", saturdays, "sundays", sundays);
        //this.credentials.Nbrjours=workingDays-1;
          
            
         
         
          //console.log(API)
        },
        err => {
        
          console.error(err)
        }
      )

      ////////////////
    //console.log(test);
    /*let newDay: any = B.toDate(),
    workingDays: number = 0,
    sundays: number = 0,
    saturdays: number = 0;
    //console.log(newDay);
    for (let i = 0; i < days; i++) {
        const day = newDay.getDay();
        newDay = B.add(1, "days").toDate();
        //console.log(newDay);
        const isWeekend = ((day % 6) === 0);
        if (!isWeekend) {
            workingDays++;
        } 
        else {
            if (day === 6) saturdays++;
            if (day === 0) sundays++;
        }
    }
       // console.log("Total Days:", days, "workingDays", workingDays, "saturdays", saturdays, "sundays", sundays);
        this.credentials.Nbrjours=workingDays-1;*/
        // var XX=this.credentials.userId=34;
        // console.log(XX);
       // console.log(this.ID);
       // console.log(this.credentials.userId)
      //  this.credentials.userId=ID
        //console.log(this.credentials.id)
        //console.log(ID)
  //  return workingDays;
  //if(confirm("Le Nombre De Jours Demandé Est : "+this.credentials.Nbrjours+" Vous Voulez Bien Continuez ?")) {
    
   // console.log(this.credentials.userId)
 

    this.auth.AddConge(this.credentials).subscribe(
      (data)=>{
        
        this.onClose();
      },
      err => {
        console.error(err);
      }
    )
  //}
  }

  calc()
  {
    
    const A=moment(this.credentials.date_fin);
    const B=moment(this.credentials.date_debut);
    const days = A.diff(B, "days") + 1;
    const year=A.year();
      ////////////// Jour Fériée //////////////////////

      this.auth.showApiALL().subscribe(
        async  API => {      
              let newDay: any = B.toDate(),
             
              workingDays: number = 0,
              sundays: number = 0,
              saturdays: number = 0,
              x : number = 0;
                      for (let i = 0; i < days; i++) {
                          const day = newDay.getDay();

                          newDay = B.add(1, "days").toDate();
                          let newDayE = B.add(0, "days").toDate().toJSON();
                           newDayE = newDayE.slice(0, -14);
                          this.myObjArray.push({DateComplet:newDayE})
                          const isWeekend = ((day % 6) === 0);
                          if (!isWeekend) {
                                  workingDays++;
                          } 
                          
                          else {
                                  if (day === 6) saturdays++;
                                  if (day === 0) sundays++;
                          }        
                          
    }
   
    for(let key1 in this.myObjArray )
    {
      let comprDate = this.myObjArray[key1]['DateComplet']
     for(let key in API) {        
        if (comprDate==key) {
          x++
           //console.log(x)

          await  this.Messages.push(['msg',comprDate])
         // await  this.Messages.push(['count',x])
		 this.enableJ=true
        } else {
          //this.enableJ=false
        }     
        
    }
    }
    //console.log(this.Messages)
        this.credentials.Nbrjours=workingDays-1-x;
     
        },
        err => {
        
          console.error(err)
        }
      )

        this.enable=true
  }

  ngOnInit() {
    /*this.auth.showApiALL().subscribe(
      API => {
        for(let key in API) {
          // Whatever you want to do with key or obj[key]
          console.log(key)
      }
        //console.log(API)
      },
      err => {
        console.error(err)
      }
    )*/

    this.auth.profile().subscribe(
      user => {
         this.ID =user.id;
        var B = this.credentials.userId =user.id;

       //console.log(this.ID);
       // console.log(B);
        
      },
      err => {
        console.error(err)
      }
    )
  
  }

  /*DeemandeConge()
  {
    console.log(this.date_debut);
    console.log(this.date_fin);
    //this.Nbrjours=this.date_fn.diff(this.date_db, 'days')
    this.Nbrjours=this.date_fin-this.date_debut;
    console.log(this.Nbrjours);
  }*/

 /* onKeypresss(event: any)
  {
  //console.log(event);
  return this.date_fin=moment(event).date(); 
    //console.log(this.date_fn);
    //return this.date_fn;

  }*/
  /*onKeypress(event: any)
    {
      //console.log(event);
      return this.date_debut=moment(event).date(); 
      //console.log(this.date_db);
      //return this.date_db;
    }*/

    /*calculateBusinessDays() {
      const A=moment(this.credentials.date_fin);
      const B=moment(this.credentials.date_debut);
      const days = A.diff(B, "days") + 1;
      console.log(days);
      let newDay: any = B.toDate(),
      workingDays: number = 0,
      sundays: number = 0,
      saturdays: number = 0;
      console.log(newDay);
      for (let i = 0; i < days; i++) {
          const day = newDay.getDay();
          newDay = B.add(1, "days").toDate();
          console.log(newDay);
          const isWeekend = ((day % 6) === 0);
          if (!isWeekend) {
              workingDays++;
          } 
          else {
              if (day === 6) saturdays++;
              if (day === 0) sundays++;
          }
      }
          console.log("Total Days:", days, "workingDays", workingDays, "saturdays", saturdays, "sundays", sundays);
          this.credentials.Nbrjours=workingDays;
      return workingDays;

      
  }*/
 
  onClose(){

    this.dialogRef.close();
  }
    
}
