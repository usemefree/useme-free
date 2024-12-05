import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { SoftwareData, SoftwareDataView } from '../models/SoftwareData';
import * as windata from '../../../public/assets/data/packageWindows.json'
import * as lindata from '../../../public/assets/data/packageLinux.json'
import * as macdata from '../../../public/assets/data/packageMac.json'
import * as anddata from '../../../public/assets/data/packageAndroid.json'

@Injectable({
  providedIn: 'root'
})
export class SoftwarelistService {

  private softwareData: SoftwareData[] = []
  length: number = 0;
  products: any;
  os: string = 'Windows';

  constructor() { }


  public getJsonFile(): void {

    switch (GlobalConstants.currentOperatingS.toString()) {
      case '1':
        this.products = (windata as any).default;
        break;
      case '2':
        this.products = (lindata as any).default;
        break;
      case '3':
        this.products = (macdata as any).default;
        break;
      case '4':
        this.products = (anddata as any).default;
        break;
      default:
        this.products = (windata as any).default;
        break;
    }
   
    if (GlobalConstants.currentcategory === 0) {
      this.softwareData = (this.products as SoftwareData[]);
    }
    else {
      this.softwareData = (this.products as SoftwareData[]).filter(x => x.category == GlobalConstants.currentcategory);
    }
    
    this.length = this.softwareData.length;
    const dataView = this.softwareData
      .map(x => {
        let ydata = GlobalConstants.mainMenuData.find(y => y.id == x.os);
        let ccat = GlobalConstants.categoryData.find(z => z.id == x.category);
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
      console.log(this.length ,"categor ",GlobalConstants.currentcategory );
    GlobalConstants.softwareDataView = (dataView as SoftwareDataView[]);
  }

  // public getJSON(PageNo: number = 1): void {

  //   const start = (PageNo - 1) * GlobalConstants.pageSize;
  //   const end = start + GlobalConstants.pageSize;

  //   this.os = GlobalConstants.mainMenuData.find(x => x.id === GlobalConstants.currentOperatingS)?.name ?? "Windows";

  //   this.http.get<SoftwareData[]>(`${GlobalConstants.JsonFilePath}package${this.os}.json`)
  //     .subscribe(data => {
  //       this.softwareData = (data as SoftwareData[])
  //       this.length = this.softwareData.length;

  //       let dataView = this.softwareData
  //         .slice(start, end)
  //         .map(x => {
  //           let ydata = GlobalConstants.mainMenuData.find(y => y.id == x.os);
  //           let ccat = GlobalConstants.categoryData.find(z => z.id == x.category);
  //           return {
  //             id: x.id,
  //             isactive: x.isactive,
  //             os: ydata ? ydata.name : 'XOS',
  //             category: ccat ? ccat.name : 'ALL',
  //             name: x.name,
  //             imgsrc: x.imgsrc,
  //             summary: x.summary,
  //             weblink: x.weblink,
  //             downloadlink: x.downloadlink,
  //             details: x.details,
  //             counting: x.counting
  //           }
  //         });
  //       GlobalConstants.softwareDataView = (dataView as SoftwareDataView[]);
  //     });
  // }

  // public getDataPagination(PageNo: number = 1): void {

  //   const apiurl = `${this.controller}GetDataPagination?PageNo=${PageNo}&PageSize=${GlobalConstants.pageSize}`;
  //   const osname = GlobalConstants.mainMenuData.find(x => x.id === GlobalConstants.currentOperatingS)?.name;
  //   const header = new HttpHeaders(
  //     {
  //       'ApiKey': GlobalConstants.httpGetKey,
  //       'os': (osname === null || osname === undefined) ? this.os : osname as string
  //     }
  //   );

  //   this.http.get<jsonDataResult>(
  //     apiurl,
  //     { headers: header }
  //   ).subscribe(data => {
  //     const datais: jsonDataResult = (data as jsonDataResult);
  //     if (datais.message === "Success") {
  //       this.length = datais.recordCount;
  //       this.softwareData = (datais.record as SoftwareData[]);

  //       let data = this.softwareData.map(x => {
  //         let ydata = GlobalConstants.mainMenuData.find(y => y.id === x.os);
  //         let ccat = GlobalConstants.categoryData.find(z => z.id === x.category);
  //         return {
  //           id: x.id,
  //           isactive: x.isactive,
  //           os: ydata ? ydata.name : 'XOS',
  //           category: ccat ? ccat.name : 'ALL',
  //           name: x.name,
  //           imgsrc: x.imgsrc,
  //           summary: x.summary,
  //           weblink: x.weblink,
  //           downloadlink: x.downloadlink,
  //           details: x.details,
  //           counting: x.counting
  //         }
  //       });
  //       GlobalConstants.softwareDataView = (data as SoftwareDataView[]);
  //     }
  //   });
  // }
}