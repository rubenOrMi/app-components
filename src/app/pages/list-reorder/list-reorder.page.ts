import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
  isDisable: boolean = true;
  colorIcon: string = 'light';

  constructor() { }

  ngOnInit() {
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log(ev);

    const itemMover = this.personajes.splice(ev.detail.from, 1,)[0];

    this.personajes.splice(ev.detail.to, 0, itemMover);
    console.log(this.personajes);
    ev.detail.complete();
  }

  activateOrder(){
    this.isDisable = !this.isDisable;
    if(this.isDisable){
      this.colorIcon = 'light';
    }else{
      this.colorIcon = 'primary';
    }
  }

}
