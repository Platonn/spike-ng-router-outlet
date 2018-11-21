import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { UserComponent } from './user/user.component';
import { HelpComponent } from './help/help.component';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  {
    path: 'team/:teamId',
    component: TeamComponent,
    children: [
      {
        path: 'user/:userName',
        component: UserComponent
      },
      {
        path: 'help',
        component: HelpComponent,
        outlet: 'support'
      }
    ]
  },
  {
    path: 'alert',
    component: AlertComponent,
    outlet: 'popup'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    UserComponent,
    HelpComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
