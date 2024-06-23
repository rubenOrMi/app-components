import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);


  constructor() { }

  ngOnInit() {
  }

  loadData(event:any){
    // console.log(event);

    if(this.data.length > 50){
      (event as InfiniteScrollCustomEvent).target.complete();
      event.target.disabled = true;
      return;
    }

    setTimeout(() => {

      const newArray = Array(20);
      this.data.push( ...newArray );

      (event as InfiniteScrollCustomEvent).target.complete();
    }, 1500);
    
  }

}
