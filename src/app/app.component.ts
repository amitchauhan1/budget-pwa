import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';  
import { SeoService } from './SeoService';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators'; 
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { alertsService, LoaderService, EnDeService } from './_helper';
import { ApiService } from './_services/api-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Budget';
  itemdata: any;
  result: any;
  constructor(private titleService: Title,private EnDeService: EnDeService,private http: HttpClient,private _snackbar:MatSnackBar,private router: Router, private activatedRoute: ActivatedRoute, private seoService: SeoService) {
  }

  ngOnInit(): void {  
    addEventListener('offline',(e)=>{
      const icon = `<i data-feather="wifi-off"></i>`;
      const message = ' Please check your internet connection';
      const msg = `${icon} ${message}`;
      
      this._snackbar.open('Please check your internet connection','Ok',{
        duration:7000,
      });
    });
    addEventListener('online',(e)=>{
      this._snackbar.open('You are now online','Ok',{
        duration:3000,
      });
    });
    this.router.events.pipe(  
      filter(event => event instanceof NavigationEnd),  
    ).subscribe(() => {  
      const rt = this.getChild(this.activatedRoute);  
      rt.data.subscribe(data => {
        this.titleService.setTitle(data.title)});  
    }); 

    // this.router.events.pipe(
    //   filter(e => e instanceof NavigationEnd),
    //   map(e => this.activatedRoute),
    //   map((route) => {
    //     while (route.firstChild) route = route.firstChild;
    //     return route;
    //   }),
    //   filter((route) => route.outlet === 'primary'),
    //   mergeMap((route) => route.data),
    // ).subscribe(data => {
    //   let seoData = data['seo'];
    //   this.seoService.updateTitle(seoData['title']);
    //   this.seoService.updateMetaTags(seoData['metaTags']);
    // });
    this.postSync();
  }
  getChild(activatedRoute: ActivatedRoute) {  
    if (activatedRoute.firstChild) {  
      return this.getChild(activatedRoute.firstChild);  
    } else {  
      return activatedRoute;  
    }  
  
  }  
  postSync() {
  //   let obj = {
  //     email: 'admin@gmail.com',
  //     password: 'admin@123', 
  //   };
  //   var ses_login = localStorage.getItem('ses_login');
  //   this.itemdata = JSON.parse(this.EnDeService.decrypt(ses_login));
  //   //api call
  //   var form = new FormData();
  //   var link =ApiService.service_url+ApiService.Get_Parameter_Type;
  //   const headers = { 'Authorization': 'Bearer '+this.itemdata.access_token};
  //   this.http.post<any>(link, form, { headers }).subscribe(
  //     res =>{
  //         this.result=res;
  //         if (this.result.success ==true) {
  //           console.log(this.result.message);
  //         } else if (this.result.success == false) {
  //           console.log(this.result.message);
  //         }
  //     },
  //     err => {
  //       // this.indexedDBService
  //       //   .addUser(obj.email)
  //       //   .then(this.backgroundSync)
  //       //   .catch(console.log);
  //       // this.backgroundSync();
  //     }
  // );

  }

  backgroundSync() {
    // navigator.serviceWorker.ready
    //   .then((swRegistration) => swRegistration.sync.register('Get_parameter_type'))
    //   .catch(console.log);
  }

}
