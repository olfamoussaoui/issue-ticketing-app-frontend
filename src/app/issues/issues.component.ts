import {Component, OnInit} from '@angular/core';
import {IssuesService} from "../services/issues.service";
import {Issue} from "../models/Issue";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit{
  issues: Issue[];
  constructor(private readonly issuesService: IssuesService) {
  }
  ngOnInit() {
    this.issuesService
      .getIssues()
      .subscribe(issues => this.issues = issues);
  }
}
