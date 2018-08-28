import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class EventingService {

    subject = new Subject<any>();
    subject$ = this.subject.asObservable();

    sendMessage(message: string) {
        console.log('sendMessage!!!');
        this.subject.next({ text: message });
    }
 
    clearMessage() {
        console.log('clearMessage!!!');
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        console.log('getMessage!!!')
        return this.subject.asObservable();
    }

}
