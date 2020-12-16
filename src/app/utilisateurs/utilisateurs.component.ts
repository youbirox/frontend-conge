import { Component, OnInit, ViewChild, Optional } from '@angular/core';
import { AuthentificationService, UserDetails,ToeknPayload } from '../authentification.service'
import { Subject } from 'rxjs';
import {DataTableDirective} from 'angular-datatables'
import { Router } from "@angular/router";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MatCardModule, MatSort,MatFormFieldModule,MatDialogModule, MatToolbarModule, MatIconModule, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material'
import { ProfileComponent } from '../profile/profile.component';
import { AddUserComponent } from '../add-user/add-user.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EdituserComponent } from '../edituser/edituser.component';
import { data } from 'jquery';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  displayedColumns = ['id','first_name','last_name','email','type','actions'];
  dataSource : MatTableDataSource<any>;
  angForm: FormGroup
  credentials: ToeknPayload = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    date_recrutement:'',
    type:""
  };

  


  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

details: UserDetails
  constructor(private auth: AuthentificationService, private router: Router,private dialog:MatDialog,@Optional() public dialogRef: MatDialogRef<AddUserComponent>) { }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
   
    this.auth.AllUsers().subscribe(
      user => {
        this.details = user
        this.dataSource=new MatTableDataSource(user)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filter = filterValue.valueOf();
        this.dtTrigger.next();
        //console.log(this.dataSource)
       
      },
      err => {
        console.error(err)
      }
    )
  
 
    
  }
  GetIdUser(id)
  {
   // console.log(id)
      this.auth.GetIdUser(id).subscribe(

        (data)=>{
         // console.log(data)
        const dialogConfig= new MatDialogConfig();
        dialogConfig.disableClose=false;
        dialogConfig.autoFocus=true;
        dialogConfig.width="90%";
        dialogConfig.data=data;
        //this.dialog.open(EditcongeComponent,dialogConfig);
        const dialogRef = this.dialog.open(EdituserComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
          data => this.ngOnInit()
      );
          
        }
      )
      
     
   
      
    
    
  }
  
  
  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        
        this.router.navigateByUrl("/utilisateurs");
       
      },
      err => {
        console.error(err);
      }
    );
  }
  delete(idr){
     
    //console.log(idr);
    if(confirm('Are you sure to delete this record ?')){
    this.auth.delete(idr).subscribe(
      (data) => {
        if(data == 1){
          this.dataSource.data = this.dataSource.data.filter(
            (user)=>{
              return user.id != idr
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
 
   
  ngOnInit() {
   
    this.dtOptions ={
        pagingType:"full_numbers",
        pageLength:5,
        autoWidth:true,
        order:[[0,'desc']]
    }



    this.auth.AllUsers().subscribe(
      user => {
        this.details = user
        this.dataSource=new MatTableDataSource(user)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dtTrigger.next();
        //console.log(this.dataSource)
       
      },
      err => {
        console.error(err)
      }
    )

    


    
   
  }
  onCreate(){
    
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(AddUserComponent,dialogConfig)
    
    
  }
  

  onClose(){

    this.dialogRef.close();
   
    
  }
}
