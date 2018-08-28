import { Component, OnInit } from '@angular/core';
import { EventingService } from "../../services/eventing/eventing.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: [
    '../../../assets/component-styles.css', 
    './person-list.component.css'
  ]
})
export class PersonListComponent {

  message:string;

  constructor(private eventing: EventingService) { }

  sendMessage(): void {
    console.log("In Person List - sending event - Message=" + this.message)
    this.eventing.sendMessage(this.message);
  }

  clearMessage(): void {
    this.eventing.clearMessage();
  }

}
