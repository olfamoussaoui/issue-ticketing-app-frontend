import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {IssueListComponent} from './issue-list/issue-list.component';
import {IssueDetailComponent} from './issue-detail/issue-detail.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { IssueFormComponent } from './issue-form/issue-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssueListComponent,
    IssueDetailComponent,
    IssueFormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
