import { Injectable } from '@angular/core';
import { jsonDataResult } from '../models/jsonDataResult';
import { Observable } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../common/global-constants';
import { SoftwareData, SoftwareDataView } from '../models/SoftwareData';

@Injectable({
  providedIn: 'root'
})
export class SoftwarelistService {

  private controller: string = GlobalConstants.ApiUrl + "DownloadPackageInfo/"
  private softwareData: SoftwareData[] = []
  length: number = 0;
  os: string = 'Windows';

  constructor(private http: HttpClient) { }

  public getJSON(PageNo: number = 1): void {
    
    this.os = GlobalConstants.mainMenuData.find(x => x.id === GlobalConstants.currentOperatingS)?.name ?? "Windows";

    this.http.get<jsonDataResult>(`assets/data/package${this.os}.json`)
      .subscribe(data => {
        const datais: jsonDataResult = (data as jsonDataResult);
        if (datais.message === "Success") {
          this.length = datais.recordCount;
          GlobalConstants.softwareData = (datais.record as SoftwareData[]);

          let dataView = GlobalConstants.softwareData.map(x => {
            let ydata = GlobalConstants.mainMenuData.find(y => y.id === x.os);
            let ccat = GlobalConstants.categoryData.find(z => z.id === x.category);
            return {
              id: x.id,
              isactive: x.isactive,
              os: ydata ? ydata.name : 'XOS',
              category: ccat ? ccat.name : 'ALL',
              name: x.name,
              imgsrc: x.imgsrc,
              summary: x.summary,
              weblink: x.weblink,
              downloadlink: x.downloadlink,
              details: x.details,
              counting: x.counting
            }
          });

          console.log(dataView);
          const start = (PageNo - 1) * GlobalConstants.pageSize;
          const end = start + GlobalConstants.pageSize;

          console.log(`Start:${start} # end:${end}`);
          GlobalConstants.softwareDataView = (dataView as SoftwareDataView[]).slice(start,end);
        }
      });
  }

  public getDataPagination(PageNo: number = 1): void {

    const apiurl = `${this.controller}GetDataPagination?PageNo=${PageNo}&PageSize=${GlobalConstants.pageSize}`;
    const osname = GlobalConstants.mainMenuData.find(x => x.id === GlobalConstants.currentOperatingS)?.name;
    const header = new HttpHeaders(
      {
        'ApiKey': GlobalConstants.httpGetKey,
        'os': (osname === null || osname === undefined) ? this.os : osname as string
      }
    );

    this.http.get<jsonDataResult>(
      apiurl,
      { headers: header }
    ).subscribe(data => {
      const datais: jsonDataResult = (data as jsonDataResult);
      if (datais.message === "Success") {
        this.length = datais.recordCount;
        this.softwareData = (datais.record as SoftwareData[]);

        let data = this.softwareData.map(x => {
          let ydata = GlobalConstants.mainMenuData.find(y => y.id === x.os);
          let ccat = GlobalConstants.categoryData.find(z => z.id === x.category);
          return {
            id: x.id,
            isactive: x.isactive,
            os: ydata ? ydata.name : 'XOS',
            category: ccat ? ccat.name : 'ALL',
            name: x.name,
            imgsrc: x.imgsrc,
            summary: x.summary,
            weblink: x.weblink,
            downloadlink: x.downloadlink,
            details: x.details,
            counting: x.counting
          }
        });
        GlobalConstants.softwareDataView = (data as SoftwareDataView[]);
      }
    });
  }
}