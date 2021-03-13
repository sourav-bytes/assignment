import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".open").click(function(){
      $(".mobile_nav").slideToggle();
    });
  }
}
