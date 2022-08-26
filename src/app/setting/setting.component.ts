import { Component, OnInit,Injectable  } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Title,DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import { alertsService, LoaderService, EnDeService } from '../_helper';
import { ApiService } from '../_services/api-service';
declare var $: any;
interface JQuery {
  tooltip(options?: any): any;
}
declare global {
  interface Window { functions: any }
}
@Injectable()
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: [
    './setting.component.scss',
  ]
})
export class SettingComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,public sanitizer: DomSanitizer,private activatedRoute: ActivatedRoute, private EnDeService: EnDeService, private route: ActivatedRoute, private http: HttpClient, private Router: Router, private loader: LoaderService, private alert: alertsService) {
 }
  ngOnInit() {
  
  }


}
