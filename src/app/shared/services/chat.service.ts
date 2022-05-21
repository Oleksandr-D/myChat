import {
  Injectable
} from '@angular/core';
import {
  IMesg
} from '../interfases/message.interface';
import {
  IUser
} from '../interfases/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private message: Array < IMesg >= [{
    id: 1,
    postedBy: 'Admin',
    date: new Date(),
    message: 'Sign up to create your account and start to use Angular blog'
  }];
  public users: Array < IUser > = [{
    id: 1,
    userName: 'Admin',
    email: 'admin@gmail.com',
    password: ''
  }];
  public checkMail = true;
  public checkUserName = true;
  public findName!: IUser[];
  public loginRegExp: RegExp = /^[A-Za-zА-Яа-я]{3,17}$/;
  public emailRegExp: RegExp = /^[a-zA-Z0-9_.&#]+[^\s@]+@[^\s@]+[.][^\s@\W]{1,3}$/;
  public paswdRegExp: RegExp = /^[a-zA-Z0-9]{4,16}$/;
  public paswd!: any;
  public em!: any;
  public addUserStatus = false;

  constructor() {}

  getBlogs(): Array < IMesg > {
    return this.message;
  };
  getUsers(): Array < IUser > {
    return this.users;
  };
  //aded new blog in service blogs: Array 
  addBlog(message: IMesg): void {
    this.message.push(message);
  };
  // edited post in servise 
  updateBlog(message: IMesg, id: number): void {
    const index = this.message.findIndex(message => message.id === id);
    this.message.splice(index, 1, message);
  };
  //checking if user exists
  validateUser(email: string, userName: string): void {
    this.checkMail = this.users.some(user => user.email === email);
    this.checkUserName = this.users.some(userNames => userNames.userName === userName);
  };
  // aded user name from users: Array to app
  getUserName(email: string) {
    this.findName = this.users.filter(user => user.email === email);
    return this.findName[0].userName
  };
  // delete post in servise
  deletePost(id: number): void {
    const index = this.message.findIndex(message => message.id === id);
    this.message.splice(index, 1);
  };
  //aded new users in service users: Array
  addUser(user: IUser): void {
    this.users.push(user);
  };

  // input validation sign in
  getS = (selector: any) => document.querySelector(selector);
  checkSignIn(): true | false {
    this.paswd = this.paswdRegExp.test(this.getS('#paswd').value);
    this.em = this.emailRegExp.test(this.getS('#em').value);
    if (this.paswd && this.em) {
      this.addUserStatus = true;
      return this.addUserStatus;
    } else {
      this.addUserStatus = false;
      alert('Check the entered data')
      return this.addUserStatus;

    };
  };

  // getName ():void{
  //   this.name = this.chatService.findName[0].userName;
  //   console.log('Works ==> user list', this.name);
  //   console.log('Works ==> service', this.chatService.findName);

}