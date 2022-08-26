import { Component, OnInit,Injectable ,ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: [
    './404.component.scss',
  ]
})
export class PagenotfoundComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
    $(document).ready(function() {
      $('body').removeClass('mat-typography');
    });

  }
  

}
