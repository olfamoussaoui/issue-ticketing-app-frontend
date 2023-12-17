import {Component, Input} from '@angular/core';
import {faFire, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Issue} from "../../models/Issue";
import {IssuesService} from "../../services/issues.service";

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent {
  protected readonly faXmark = faXmark;
  protected readonly faFire = faFire
  @Input() issue: Issue;

  constructor(private readonly issueService: IssuesService) {
  }

  getRange(number: number): number[] {
    return Array.from({length: number});
  }

  deleteIssue(issue: Issue) {
    this.issueService
      .deleteIssue(issue.id)
      .subscribe(() => {
        console.log("Issue deleted!")
      });
  }
}
