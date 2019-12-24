import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MemberDetailComponent } from './member-detail.component';
import { MembersComponent } from './members.component';
import { MemberService } from './member.service';
import { DashboardComponent} from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
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
