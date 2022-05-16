import {
  Component,
  OnInit
} from '@angular/core';

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
  email!: string;
  password!: string;
  name!: string;

  constructor() {}

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
}