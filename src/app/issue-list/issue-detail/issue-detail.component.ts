import {Component} from '@angular/core';
import {faFire, faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent {
  protected readonly faXmark = faXmark;
  protected readonly faFire = faFire;
}
