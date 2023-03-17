import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, mapTo, Observable, of } from 'rxjs';
import { ComplexFormValue } from 'src/app/models/complex-form.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  saveUserInfo(formValue: ComplexFormValue): Observable<boolean> {
    return this.http
      .post('https://jsonplaceholder.typicode.com/users', formValue)
      .pipe(
        mapTo(true),
        delay(1000),
        catchError(() => of(false).pipe(delay(1000)))
      );
  }
}
