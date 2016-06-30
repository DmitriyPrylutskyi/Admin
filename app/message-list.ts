import {Component, Input} from '@angular/core';
import { MessageItem } from './message-item';
import { MdList } from '@angular2-material/list';
import { Message } from './message';

@Component({
    selector: 'message-list',
    templateUrl: '../templates/message-list.html',
    directives: [MessageItem, MdList]
})

export class MessageList {
    @Input () messages: Message[];
    
    onMessageEdited (message: Message, title:string) {
        if (message) {
            message.title =  title;
        }
    }
}