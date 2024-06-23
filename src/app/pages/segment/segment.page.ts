import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheroes: Observable<any>;
  publisher: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superheroes = this.dataService.getHeroes();
  }

  segmentChanged(ev: any){
    // console.log(ev);
    this.publisher = ev.detail.value;
    
  }

}
