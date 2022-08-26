import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [
    './index.component.scss',
  ]
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var ses_login = localStorage.getItem('ses_singin');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    } 
    $(document).ready(function(){
      
    });
  }

}
