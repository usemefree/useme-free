import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jsonDataResult } from '../models/jsonDataResult';
import { category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  length: number = 0;
  
  constructor(private http: HttpClient) {  }

  public getJSON(): void {
    const apiUrl = GlobalConstants.ApiUrl + "SoftwareCategory/GetData";
    const header = new HttpHeaders(
      {
        'ApiKey': GlobalConstants.httpGetKey,
      }
    );

    this.http.get<jsonDataResult>(
      apiUrl,
      { headers: header }
    )
    .subscribe(data => {
      const datais: jsonDataResult = (data as jsonDataResult);
      if (datais.message === "Success") {
        this.length = datais.recordCount;
        GlobalConstants.categoryData = (datais.record as category[]);
      }
    });
  }

}
