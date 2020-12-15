import { ConfirmationPopoverModule} from 'angular-confirmation-popover'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AuthentificationService } from './authentification.service'
import { AuthGuardService } from './auth-guard.service'
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
//import { DataTableModule } from 'angular7-data-table';
import { DataTablesModule } from 'angular-datatables';
//import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule,MatTableModule } from '@angular/material'
import {Moment} from 'moment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatPaginator  } from '@angular/material/paginator';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { ProfileuserComponent } from './profileuser/profileuser.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { DlDateTimeDateModule, DlDateTimePickerModule, } from 'angular-bootstrap-datetimepicker';
import { from } from 'rxjs';
import { CongeAttenteComponent } from './conge-attente/conge-attente.component';
import { CongeValideComponent } from './conge-valide/conge-valide.component';
import { EditcongeComponent } from './editconge/editconge.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ParametreComponent } from './parametre/parametre.component';
import { RefusComponent } from './refus/refus.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'utilisateurs',
    component: UtilisateursComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'mon_profile',
    component: ProfileuserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'conge-attente',
    component: CongeAttenteComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'conge-valide',
    component: CongeValideComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'parametre',
    component: ParametreComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'refus',
    component: RefusComponent,
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  exports: [
    MatDatepickerModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,



    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule
    
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    UtilisateursComponent,
    AddUserComponent,
    ProfileuserComponent,
    DemandeCongeComponent,
    CongeAttenteComponent,
    CongeValideComponent,
    EditcongeComponent,
    EdituserComponent,
    ParametreComponent,
    RefusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'primary'
    }),
    SlimLoadingBarModule,
    ReactiveFormsModule,
    DataTablesModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    //MatPaginator,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BsDatepickerModule.forRoot(),
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCheckboxModule
    //BrowserAnimationsModule
  ],
  providers: [AuthentificationService, AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents:[AddUserComponent,DemandeCongeComponent,EditcongeComponent,EdituserComponent]
})
export class AppModule { }
