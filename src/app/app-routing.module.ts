import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IssueFormComponent} from "./issue-form/issue-form.component";
import {IssuesComponent} from "./issues/issues.component";


const routes: Routes = [
  {path: '', component: IssuesComponent},
  {path: 'new', component: IssueFormComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
