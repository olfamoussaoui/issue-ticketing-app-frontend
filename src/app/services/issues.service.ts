import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {Issue} from "../models/Issue";

@Injectable()
export class IssuesService {
  private readonly apiUrl = 'http://localhost:8082/api/v1';

  constructor(private readonly http: HttpClient) {
  }

  getIssues(): Observable<Issue[]> {
    return this.http
      .get<Issue[]>(`${this.apiUrl}/issues`)
      .pipe(
        tap(console.log),
        catchError(error => this.handleError(error, []))
      );
  }

  getIssueById(): Observable<Issue> {
    return of()
  }

  createIssue(issue: Issue): Observable<Issue> {
    return of();
  }

  updateIssue(issue: Issue): Observable<Issue> {
    return of();
  }
  deleteIssue(id: String): Observable<Issue> {
    return this.http
      .delete<Issue[]>(`${this.apiUrl}/issues/${id}`)
      .pipe(
        tap(console.log),
        catchError(error => this.handleError(error, []))
      );
  }

  private handleError(error: Error, errorValue: any) {
    console.log(error);
    return of(errorValue);
  }
}
