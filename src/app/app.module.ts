import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { MemberDetailComponent } from './member-detail.component';
import { MembersComponent } from './members.component';
import { MemberService } from './member.service';
import { DashboardComponent} from './dashboard.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'members',
        component: MembersComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    MemberDetailComponent,
    MembersComponent,
    DashboardComponent
  ],
  bootstrap:    [
    AppComponent
  ],
  providers: [ MemberService ]
})
export class AppModule { }
