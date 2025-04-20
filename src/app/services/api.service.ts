import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import {ACTIONBTNAPI} from '../data/actionsbtns';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // actionbtnurl = 'https://mocki.io/v1/37b2c36e-002f-4457-8174-dbda3f41bfa7'
http = inject(HttpClient);

getButtons() {
  return of(ACTIONBTNAPI)
  // return this.http.get(this.actionbtnurl);
}
}
