import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessageFieldComponent } from './chat/message-field/message-field.component';
import { ChatComponent } from './chat/chat.component';
import { UserListComponent } from './chat/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatComponent,
    UserListComponent,
    MessageFieldComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
