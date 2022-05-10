import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  apiBaseUrl: string = environment.apiBaseUrl;

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiBaseUrl}/api/categories/`);
  }
}
