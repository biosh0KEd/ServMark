import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private _apiUrl = 'http://localhost:5116/api';

  constructor(
    private http: HttpClient
  ) { }

  getAll(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit) {
      params = params.set('limit', limit);
    }
    if (offset) {
      params = params.set('offset', offset);
    }
    return this.http.get<Category[]>(`${this._apiUrl}/category`, { params });
  }
}
