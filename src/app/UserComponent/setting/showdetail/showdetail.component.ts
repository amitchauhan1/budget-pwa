import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControlDirective, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/_services/api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.scss'],
  
})
export class ShowdetailComponent implements OnInit {
  public user_detail:any
  public date= new Date
  p: number = 1;
  collection: any[]  

  


  public auth_detail = JSON.parse(localStorage.getItem('ses_login_auth'));
  public trasncation_data = JSON.parse(localStorage.getItem('transcation_detail'));

   detailForm :FormGroup= this.formBuilder.group({
    transaction_id :  new FormControl(this.route.snapshot.params.transaction_id),
    
    });
  succes_data: any;
  
  

  constructor(private _http: HttpClient,private formBuilder: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    var access_token = this.auth_detail.data.access_token;
    var link = ApiService.service_url + ApiService.transacation_detail;
    const headers = { 'Authorization': 'Bearer ' + access_token };
    this._http.post<any>(link, this.detailForm.value, { headers }).subscribe((res) => {
     this.succes_data=res.data;
      console.log(res);
    })
  }
   
   

}
