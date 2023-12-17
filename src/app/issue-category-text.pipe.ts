import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'issueCategoryText'
})
export class IssueCategoryTextPipe implements PipeTransform {
  transform(category: String): string {
    let categoryContent;
    switch (category) {
      case "PROJECT":
        categoryContent = "Project";
        return categoryContent;

      case "HARDWARE":
        categoryContent = "Hardware";
        return categoryContent;

      case  "SOFTWARE":
        categoryContent = "Software";
        return categoryContent;
      case  "OTHER":
        categoryContent = "Other";
        return categoryContent;
      default:
        categoryContent = "Unknown";
    }
    return categoryContent;
  };
}
