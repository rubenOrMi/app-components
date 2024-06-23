import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[];

  constructor() { }

  ngOnInit() {
  }

  handleRefresh(ev:any){
    setTimeout(() => {
      // Any calls to load data go here
      this.items = Array(20);
      ev.target.complete();
    }, 2000);
    
  }

}
