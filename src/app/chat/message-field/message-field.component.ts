import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  ChatService
} from 'src/app/shared/services/chat.service';
import {IMesg} from '../../shared/interfases/message.interface';


@Component({
  selector: 'app-message-field',
  templateUrl: './message-field.component.html',
  styleUrls: ['./message-field.component.scss']
})
export class MessageFieldComponent implements OnInit {
  
  message!: string;
  editStatus = false;
  name!: string;
  userMessages!: IMesg[];

  constructor(private chatService: ChatService) {};

  ngOnInit(): void {}

  sendMessage(): void {
    const newPost = {
      id: 1,
      postedBy: this.name,
      date: new Date(),
      message: this.message
    };
    if (this.userMessages.length > 0) { //creates unique id
      const id = this.userMessages.slice(-1)[0].id;
      newPost.id = id + 1;
    };
    this.chatService.addBlog(newPost);
    // this.topic = '';
    // this.message = '';
    // this.addPost();
  };

  // savePost(){}


}