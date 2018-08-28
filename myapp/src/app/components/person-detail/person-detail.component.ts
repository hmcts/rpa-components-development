import { Component, OnInit } from '@angular/core';
import { EventingService } from "../../services/eventing/eventing.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: [
    '../../../assets/component-styles.css', 
    './person-detail.component.css'
  ]
})
export class PersonDetailComponent {

  message:string;
  subscription: Subscription;

  constructor(private eventing: EventingService) { 
    this.subscription = eventing.subject$.subscribe(
      event => {
        console.log("In Person Detail - received event - Message=" + event.text)        
        this.message = event.text;  
      }
    );    
  }

}