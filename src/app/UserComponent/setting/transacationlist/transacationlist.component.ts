import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/_services/api-service';

@Component({
  selector: 'app-transacationlist',
  templateUrl: './transacationlist.component.html',
  styleUrls: ['./transacationlist.component.scss']
})
export class TransacationlistComponent implements OnInit {
  term: any;
  public auth_detail = JSON.parse(localStorage.getItem('ses_login_auth'));
  loadUrl: any;
  public plan_id = 2;
  transcation_detail: any;
  p: number = 1;
  collection: any[]  
  



  constructor(private _http: HttpClient, private router: Router) {}

 

  ngOnInit(): void {
  
    var access_token = this.auth_detail.data.access_token;
    var link = ApiService.service_url + ApiService.payment_list;
     const headers = { 'Authorization': 'Bearer ' + access_token };
    this._http.post<any>(link, '', { headers }).subscribe((res) => {
      this.transcation_detail=res.data;
      console.log(this.transcation_detail);
      
       })
  }
  clear()
  {
    this.term.reset();
  }
 
}
