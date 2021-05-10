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
import {MatFormFieldModule, MatOptionModule, MatRadioModule, MatSelectModule} from '@angular/material';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatInputModule } from '@angular/material/input';


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
    UserProfileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'vacancies', component: VanancyListComponent, canActivate: [AuthGuard]},
      {path: 'registration', component: RegistrationComponent},
      {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]}
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
