import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'issueStatusText'
})
export class IssueStatusTextPipe implements PipeTransform {

  transform(status: String): string {
    let statusContent;
    switch (status) {
      case "CLOSED":
        statusContent = "Closed";
        return statusContent;

      case "IN_PROGRESS":
        statusContent = "Started";
        return statusContent;

      case  "OPEN":
        statusContent = "Open";
        return statusContent;
      default:
        statusContent = "Other";
    }
    return statusContent;
  };
}
