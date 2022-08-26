import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule,Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule} from 'ngx-spinner';
import { SnotifyModule,SnotifyService,ToastDefaults} from 'ng-snotify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { BeforeLoginComponent } from './UserComponent/before-login/before-login.component';
import { LoginComponent } from './login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterModule} from '@angular/router';
import { SuccespaymentComponent } from './UserComponent/succespayment/succespayment.component';




@NgModule({
  declarations: [
    AppComponent,
    AfterLoginComponent,
    BeforeLoginComponent,
    LoginComponent,
    
    SuccespaymentComponent,
  
  
   
   
  ],
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SnotifyModule,
    NgxSpinnerModule,
    ReactiveFormsModule, 
    MatSnackBarModule,
    FormsModule, ServiceWorkerModule.register('service-worker.js', { enabled: environment.production }),
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
    ]),
  ],
  providers: [Title,{ provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
