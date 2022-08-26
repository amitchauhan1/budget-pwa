import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfterLoginComponent } from './after-login/after-login.component';
import { BeforeLoginComponent } from './UserComponent/before-login/before-login.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import {ApiService } from './_services/api-service';
import { SigninComponent } from './UserComponent/signin/signin.component';
import { SignupComponent } from './UserComponent/signup/signup.component';
import { ForgotpasswordComponent } from './UserComponent/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './UserComponent/resetpassword/resetpassword.component';
import { VerificationComponent } from './UserComponent/verification/verification.component';
import { SuccessComponent } from './UserComponent/success/success.component';

import { IndexComponent } from './UserComponent/index/index.component';
import { LearnBudgetComponent } from './UserComponent/learn-budget/learn-budget.component';

import { SuccespaymentComponent } from './UserComponent/succespayment/succespayment.component';


const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'sign-in',
    component: SigninComponent,
    data : { title: 'Budget | Sign In '}
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    data : { title: 'Budget | Sign Up '}
  },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent,
    data : { title: 'Budget | Forgot Password '}
  },
  {
    path: 'reset-password',
    component: ResetpasswordComponent,
    data : { title: 'Budget | Reset Password '}
  },
  {
    path: 'verification/:any',
    component: VerificationComponent,
    data : { title: 'Budget | verification '}
  },
  {
    path: 'success/:any',
    component: SuccessComponent,
    data : { title: 'Budget | Success '}
  },
  {
    path: '',
    component: IndexComponent,
    data : { title: 'Budget | Home '}
  },
  {path: 'app/succesmessage',
  component : SuccespaymentComponent },

 


  {
    path:'',
    component: BeforeLoginComponent,
      children: [   
      
        {path:'app/budget', data : { title: 'Budget | Budget '}, loadChildren:()=>import('./UserComponent/budget/budget.module').then(m=>m.BudgetModule)},
        {path:'app/learn-budget', data : { title: 'Budget | learn-budget '}, loadChildren:()=>import('./UserComponent/learn-budget/learn-budget.module').then(m=>m.LearnBudgetModule)},
        {path:'app/insight', data : { title: 'Budget | insight '}, loadChildren:()=>import('./UserComponent/insight/insight.module').then(m=>m.InsightModule)},
        { path: 'app/contact-us', loadChildren: () => import('./UserComponent/contactus/contactus.module').then(m => m.ContactusModule) },
        { path: 'app/userprofile', loadChildren: () => import('./UserComponent/userprofile/userprofile.module').then(m => m.UserprofileModule) },
        // { path: 'app/changepassword', loadChildren: () => import('./UserComponent/changepassword/changepassword.module').then(m => m.ChangepasswordModule) },
        { path: 'app/setting', loadChildren: () => import('./UserComponent/setting/setting.module').then(m => m.SettingModule) },
        { path: 'app/progresspanel', loadChildren: () => import('./UserComponent/progresspanel/progresspanel.module').then(m => m.ProgresspanelModule) },
        { path: 'app/progresspanel2', loadChildren: () => import('./UserComponent/progresspanel2/progresspanel2.module').then(m => m.Progresspanel2Module) },

    
      
       
        
      ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data : { title: 'Budget | Login '}
  },
  { 
    path:'',
    component: AfterLoginComponent,
      children: [ 
        {path:'dashboard', data : { title: 'Budget | Dashboard '}, loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
        {path:'category-type', data : { title: 'Budget | Category Type '}, loadChildren:()=>import('./parametertype/parametertype.module').then(m=>m.ParametertypeModule)},
        {path:'category-value', data : { title: 'Budget | Category Values '}, loadChildren:()=>import('./parametervalue/parametervalue.module').then(m=>m.ParametervalueModule)},
        {path:'subcategory', data : { title: 'Budget | Sub Category '}, loadChildren:()=>import('./subcategory/subcategory.module').then(m=>m.SubCategoryModule)},
        {path:'learn', data : { title: 'Budget | Learn '}, loadChildren:()=>import('./learn/learn.module').then(m=>m.LearnModule)},
        {path:'learn-library', data : { title: 'Budget | Video Gallery '}, loadChildren:()=>import('./learnlibrary/learnlibrary.module').then(m=>m.LearnLibraryModule)},
        {path:'plan', data : { title: 'Budget | Plans '}, loadChildren:()=>import('./plan/plan.module').then(m=>m.PlanModule)},
        {path:'step', data : { title: 'Budget | Step '}, loadChildren:()=>import('./step/step.module').then(m=>m.StepModule)},
        {path:'users', data : { title: 'Budget | Users '}, loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
        {path:'revenue', data : { title: 'Budget | Revenue '}, loadChildren:()=>import('./revenue/revenue.module').then(m=>m.RevenueModule)},
        {path:'notification', data : { title: 'Budget | Notifications '}, loadChildren:()=>import('./notification/notification.module').then(m=>m.NotificationModule)},
        {path:'settings', data : { title: 'Budget | Settings '}, loadChildren:()=>import('./setting/setting.module').then(m=>m.SettingModule)},
      ] 
  },
  
  
  
  
 
  
  
  

  {
    path: '**',
    data : { title: 'Budget | 404 '},
    loadChildren: () => import('./404/404.module').then(m => m.PagenotfoundModule),
  },

];

@NgModule({ 
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
