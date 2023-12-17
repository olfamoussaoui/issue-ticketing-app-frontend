import {Component} from '@angular/core';
import {Category, Status} from "../models/Issue";

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent {
  protected keys = Object.keys;
  protected readonly status = Status;
  protected readonly category = Category;
}
