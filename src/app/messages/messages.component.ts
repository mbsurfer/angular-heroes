import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // The messagesService property must be public because we bind to it in the template.
  // Angular only binds to PUBLIC  component properties
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
