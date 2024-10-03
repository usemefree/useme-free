import { Component, OnInit } from '@angular/core';
import { SoftwareDataView } from '../../models/SoftwareData';
import { SoftwarelistService } from '../../services/softwarelist.service';
import { CommonModule } from '@angular/common';
import { GlobalConstants } from '../../common/global-constants';

@Component({
  selector: 'app-softwarelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent implements OnInit {

  length: number = 0;
  pagetotal: number = 0;
  currentPage: number = 1;

  softwareDataView: SoftwareDataView[] = [];

  constructor(private service: SoftwarelistService) { }

  ngOnInit(): void {
    this.getdataPagination();
  }

  ngDoCheck(): void {
    this.softwareDataView = GlobalConstants.softwareDataView;
    this.pagetotal = this.service.length > GlobalConstants.pageSize ? Math.ceil(this.service.length / GlobalConstants.pageSize) : 1
  }

  getdataPagination(): void {
    let osid = GlobalConstants.mainMenuData.find(x => x.id === GlobalConstants.currentOperatingS)?.name;
    this.service.getDataPagination(this.currentPage);
  }

  pagination(pageno: number = 1) {
    this.currentPage = pageno;
    this.getdataPagination();
  }

  paginationlast() {
    this.currentPage = this.pagetotal;
    this.getdataPagination();
  }

  createRange() {
    return new Array(this.pagetotal).fill(0)
      .map((n, index) => index + 1);
  }
}