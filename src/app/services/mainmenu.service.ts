import { Injectable } from '@angular/core';
import { jsonDataResult } from '../models/jsonDataResult';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { mainMenu } from '../models/mainMenu';
//import *  as data  from '/assets/data/operatingSystems.json'
import *  as data from '../../../public/assets/data/operatingSystems.json'

@Injectable({
  providedIn: 'root'
})
export class MainmenuService {
  length: number = 0;
  products: any;
  constructor(private http: HttpClient) { }

  public getJSON(): void {
    // this.http.get<mainMenu[]>(`${GlobalConstants.JsonFilePath}operatingSystems.json`)
    //   .subscribe(data => {
    //     GlobalConstants.mainMenuData = (data as mainMenu[]);
    //     this.length = GlobalConstants.mainMenuData.length
    //   });
    this.getJsonFile();
  }

  public getJsonFile(): void {
    this.products = (data as any).default;
    GlobalConstants.mainMenuData = (this.products as mainMenu[]);
    this.length = GlobalConstants.mainMenuData.length

  }

  // public getJSON(): void {
  //   const apiUrl = GlobalConstants.ApiUrl + "OperatingSystem/GetData";

  //   const header = new HttpHeaders(
  //     {
  //       'ApiKey': GlobalConstants.httpGetKey,
  //     }
  //   );

  //   this.http.get<jsonDataResult>(
  //     apiUrl,
  //     { headers: header }
  //   )
  //     .subscribe(data => {
  //       const datais: jsonDataResult = (data as jsonDataResult);
  //       if (datais.message === "Success") {
  //         this.length = datais.recordCount;
  //         GlobalConstants.mainMenuData = (datais.record as mainMenu[]);
  //       }
  //     });
  // }

}
