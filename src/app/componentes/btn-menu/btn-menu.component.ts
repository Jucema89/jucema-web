import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-btn-menu',
  templateUrl: './btn-menu.component.html',
  styleUrls: ['./btn-menu.component.css']
})
export class BtnMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.btn-triger').click(function(){
      $(this).closest('.float-btn-group').toggleClass('open');
    });
  }

}
