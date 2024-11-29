import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jsonDataResult } from '../models/jsonDataResult';
import { category } from '../models/category';
import *  as data from '../../../public/assets/data/softwareCategory.json'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  length: number = 0;
  products: any;
  constructor(private http: HttpClient) { }

  public getJSON(): void {
    // this.http.get<category[]>(`${GlobalConstants.JsonFilePath}softwareCategory.json`)
    //   .subscribe(data => {
    //     GlobalConstants.categoryData = (data as category[]);
    //     this.length = GlobalConstants.categoryData.length;
    //   });
      this.getJsonFile();
  }

  public getJsonFile(): void {
    this.products = (data as any).default;
    GlobalConstants.categoryData = (this.products as category[]);
    this.length = GlobalConstants.categoryData.length
  }
  // public getJSON(): void {
  //   const apiUrl = GlobalConstants.ApiUrl + "SoftwareCategory/GetData";
  //   const header = new HttpHeaders(
  //     {
  //       'ApiKey': GlobalConstants.httpGetKey,
  //     }
  //   );

  //   this.http.get<jsonDataResult>(
  //     apiUrl,
  //     { headers: header }
  //   )
  //   .subscribe(data => {
  //     const datais: jsonDataResult = (data as jsonDataResult);
  //     if (datais.message === "Success") {
  //       this.length = datais.recordCount;
  //       GlobalConstants.categoryData = (datais.record as category[]);
  //     }
  //   });
  // }

}