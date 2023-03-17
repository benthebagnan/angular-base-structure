import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, mapTo, Observable, of } from 'rxjs';
import { ComplexFormValue } from 'src/app/models/complex-form.model';

export interface Post {
  id: number;
  userId: number;
  title: string;
  createdDate: string;
  content: string;
  comments: Comment[];
  imageUrl?: string;
}

export interface Comment {
  id: number;
  userId: number;
  comment: string;
  createdDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  baseUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:3000/posts`);
  }

  saveUserInfo(formValue: ComplexFormValue): Observable<boolean> {
    return this.http.post(`${this.baseUrl}/posts`, formValue).pipe(
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(delay(1000)))
    );
  }
}
