import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'issueStatusColor'
})
export class IssueStatusColorPipe implements PipeTransform {

  transform(status: String): string {
    let color;
    switch (status) {
      case "CLOSED":
        color = "status-bg-closed";
        return color;

      case "IN_PROGRESS":
        color = "status-bg-started";
        return color;

      case  "OPEN":
        color = "status-bg-open";
        return color;
      default:
        color = "status-bg-open";
    }
    return color;
  };
}
