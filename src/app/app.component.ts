import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aurora-ai';
  // mobile:boolean = false;

  mobile = true;

  constructor() {}


  ngOnInit(): void {
    if (window.innerWidth < 500) {
      this.mobile = true;
      console.log(this.mobile);
    }
    else {
      this.mobile = false;
      console.log(this.mobile);
    }
  }

}


