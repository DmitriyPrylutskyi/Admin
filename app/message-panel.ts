import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MessageList} from './message-list';
import {Message} from './message';

@Component({
    selector: 'message-panel',
    templateUrl: '../templates/message-panel.html',
    styleUrls: ['../css/message-panel.css'],
    directives: [MessageList]
})

export class MessagePanel {
    @Output () added = new EventEmitter();
    @Output () deleted = new EventEmitter();
   
    @Input () message: Message;
    @Input () messages: Message [];
    

    add (title: string){
         this.added.emit(new Message(title));
    }

    
    
    del () {
        this.deleted.emit(this.message);
    }

}