import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {IssuesComponent} from './issues/issues.component';
import {IssueDetailComponent} from './issues/issue-detail/issue-detail.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {IssueFormComponent} from './issue-form/issue-form.component';
import {AppRoutingModule} from './app-routing.module';
import {IssuesService} from "./services/issues.service";
import {HttpClientModule} from "@angular/common/http";
import {IssueStatusColorPipe} from './issue-status-color.pipe';
import {IssueStatusTextPipe} from './issue-status-text.pipe';
import { IssueCategoryTextPipe } from './issue-category-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssuesComponent,
    IssueDetailComponent,
    IssueFormComponent,
    IssueStatusColorPipe,
    IssueStatusTextPipe,
    IssueCategoryTextPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [IssuesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
