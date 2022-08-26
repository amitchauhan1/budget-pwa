import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss',
  '../../../assets/front/css/front-style.css',
  '../../../assets/front/css/reset.min.css',
  '../../../assets/front/css/react-datepicker.min.css',

],
  encapsulation: ViewEncapsulation.None,
})
export class SettingComponent implements OnInit {
  popoverTitle = 'Logout';
  popoverMessage = 'Are you sure want to Logout ?';
  confirmClicked = false;
  cancelClicked = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    var ses_login = localStorage.getItem('ses_singin');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    } 
  }
  logout()
  {
    localStorage.removeItem('ses_login_auth');
     localStorage.clear();
     this.router.navigate(['/sign-in']);
  }

}
