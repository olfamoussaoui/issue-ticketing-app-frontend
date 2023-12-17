export enum Status {
  OPEN = "Open",
  IN_PROGRESS = "Started",
  CLOSED = "Closed"
}

export enum Category {
  PROJECT = "Project",
  HARDWARE = "Hardware",
  SOFTWARE = "Software",
  OTHER = "Other"
}

export class Issue {
  id: string;
  title: string;
  description: string;
  category: Category;
  priority: number;
  progress: number;
  status: Status;
  active: boolean;
  creationDate: Date
}
