import { Component } from '@angular/core';
import { MessagePanel } from './message-panel';
import { MessageList } from './message-list';
import { Message } from './message';


@Component({
    selector: 'cms-app',
    templateUrl: '../templates/app.html',
    styleUrls: ['../css/app.css'],
    directives: [MessagePanel, MessageList]
})
export class App {
    messages: Message [];

    constructor () {
        this.messages = [];
    }

    onMessagesAdded (message: Message) {
        this.messages.push(message);
    }
}
