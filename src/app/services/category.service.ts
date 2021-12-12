import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralData } from '../config/general-data';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = GeneralData.BUSSINESS_URL;
  token: string = '';

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
    ) { 
      this.token = this.localStorage.GetToken();
    }

    GetRecordList(): Observable<CategoryModel[]>{
      return this.http.get<CategoryModel[]>(`${(this.url)}/categories`);
    }

    SaveRecord(data: CategoryModel): Observable<CategoryModel>{
      return this.http.post<CategoryModel>(
        `${(this.url)}/categories`,{
          name: data.name
        }
      );
    }

    SearchRecord(id: number): Observable<CategoryModel>{
      return this.http.get<CategoryModel>(`${(this.url)}/categories/${id}`);
    }

    EditRecord(data: CategoryModel): Observable<CategoryModel>{
      return this.http.post<CategoryModel>(
        `${(this.url)}/categories/${data.id}`,{
          id: data.id,
          name: data.name
         } );
    }
    RemoveRecord(id: number): Observable<any>{
      return this.http.delete(`${(this.url)}/categories/${id}`);
    }
}
