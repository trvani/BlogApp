import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Meta } from '../Models/Meta';

@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {

  constructor(private http: HttpClient) {}
  readonly baseURL = 'https://localhost:44371/api/Videogame';
}
