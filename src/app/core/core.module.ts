import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { ComplexFormValue } from '../models/complex-form.model';
import { Observable, mapTo, delay } from 'rxjs';
import { of, map, catchError } from 'rxjs';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {
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
