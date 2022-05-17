import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageFieldComponent } from './chat/message-field/message-field.component';
import { ChatComponent } from './chat/chat.component';
import { UserListComponent } from './chat/user-list/user-list.component';

const routes: Routes = [
  {path:'chat', component:ChatComponent,
       children:[
                 {path:'message', component:MessageFieldComponent},
                 {path:'list', component:UserListComponent}
       ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
