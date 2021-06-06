import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {JwtModule} from '@auth0/angular-jwt';
import {VanancyListComponent} from './vanancy-list/vanancy-list.component';
import {AuthGuard} from './guards/auth/auth-guard.guard';
import {FooterComponent} from './footer/footer.component';
import {RegistrationComponent} from './registration/registration.component';
import {
  MatCardModule, MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {MatInputModule} from '@angular/material/input';
import {VacancyInfoDialogComponent} from './vacancy-info-dialog/vacancy-info-dialog.component';
import {OfferListComponent} from './offer-list/offer-list.component';
import {CurrentUserSpecialistGuard} from './guards/currentUserSpecialist/current-user-specialist.guard';
import {VacancyCreatorComponent} from './vacancy-creator/vacancy-creator.component';
import {CurrentUserCompanyGuard} from './guards/currentUserCompany/current-user-company.guard';
import { RequestsListComponent } from './requests-list/requests-list.component';
import { SpecialistsListComponent } from './specialists-list/specialists-list.component';


export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    HomeComponent,
    VanancyListComponent,
    FooterComponent,
    RegistrationComponent,
    UserProfileComponent,
    VacancyInfoDialogComponent,
    OfferListComponent,
    VacancyCreatorComponent,
    RequestsListComponent,
    SpecialistsListComponent
  ],
  entryComponents: [VacancyInfoDialogComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: VanancyListComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'vacancies', component: VanancyListComponent, canActivate: [AuthGuard]},
      {path: 'createvacancy', component: VacancyCreatorComponent, canActivate: [AuthGuard, CurrentUserCompanyGuard]},
      {path: 'specialists-list', component: SpecialistsListComponent, canActivate: [AuthGuard, CurrentUserCompanyGuard]},
      {path: 'requests', component: RequestsListComponent, canActivate: [AuthGuard, CurrentUserCompanyGuard]},
      {path: 'registration', component: RegistrationComponent},
      {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
      {path: 'offers', component: OfferListComponent, canActivate: [AuthGuard, CurrentUserSpecialistGuard]}
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:64709'],
        blacklistedRoutes: []
      }
    }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
