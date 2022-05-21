import {
  Component,
  OnInit
} from '@angular/core';
import {
  ChatService
} from '../shared/services/chat.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  enterStatus = true;
  adminStatus = false;
  addPostWindow = false;
  topic!: string;
  message!: string;
  userName!: string;
  signUpWindow = false;
  signInWindow = false;
  password!: string;
  name!: string;
  addUserStatus = false;
  email!: string;
  hello = false;


  constructor(
    private chatService: ChatService
  ) {}

  ngOnInit(): void {}

  //button Add post
  addPost(): void {
    this.addPostWindow = !this.addPostWindow;
    this.topic = '';
    this.message = '';
  };

  //button Sign in
  signIn(): void {
    this.signInWindow = !this.signInWindow;
    this.resetForm();
  };

  //reset form
  private resetForm() {
    this.topic = '';
    this.message = '';
    this.userName = '';
    this.email = '';
    this.password = '';

  };

  //button Sign up
  signUp(): void {
    this.signUpWindow = !this.signUpWindow;
    this.resetForm();
  };

  //button sign out
  signOut(): void {
    this.enterStatus = !this.enterStatus;
    this.adminStatus = !this.adminStatus;
    this.name = '';
    this.email = '';
  };

  //button submit on sign in window
  signInSubmit(): void {
    const ceck = this.chatService.checkSignIn();
    this.chatService.validateUser(this.email, this.userName);
    if (this.chatService.checkMail && ceck) {
      this.adminStatus = !this.adminStatus;
      this.signInWindow = !this.signInWindow;
      this.enterStatus = !this.enterStatus;
      this.hello = true;
      //get user name from service
      this.name = this.chatService.getUserName(this.email);
      console.log('Works ==> header', this.chatService.findName);

    } else if (!this.chatService.checkMail && ceck) {
      alert('User not exist. Please sign up.');
    };
  };

  goChat(){
    this.hello = false;
  }
  // signUp button
  signUpSubmit() {}






}