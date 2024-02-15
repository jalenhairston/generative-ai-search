import {inject, Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private http: HttpClient = inject(HttpClient)

  getResult(query: string) {
    return this.http.get('../../assets/sample-data.json')
  }


}
