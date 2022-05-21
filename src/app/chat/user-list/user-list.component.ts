import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  name!: string;
  email!: string;


  constructor(private chatService: ChatService) {
    
   }

  ngOnInit(): void {
    this.getName ();
  }

  getName ():void{
    this.name = this.chatService.findName[0].userName;
    console.log('Works ==> user list', this.name);
    console.log('Works ==> service', this.chatService.findName);
    
  }

}


