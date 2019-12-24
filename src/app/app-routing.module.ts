import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';

import { MemberDetailComponent } from './member-detail.component';
import { MembersComponent } from './members.component';
import { DashboardComponent} from './dashboard.component';

const routes = [
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
  },
  {
    path: 'detail/:id',
    component: MemberDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
