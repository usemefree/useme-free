import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class SoftwarelistComponent implements OnInit, AfterViewInit, DoCheck {

  @ViewChild('anchor') anchor: ElementRef;

  private observer: IntersectionObserver;

  length: number = 0;
  pagetotal: number = 0;
  currentPage: number = 0;
  start: number = 0;
  end: number = 0;
  softwareDataView: SoftwareDataView[] = [];

  constructor(ref: ElementRef, private service: SoftwarelistService) {
    this.anchor = ref.nativeElement;
  }

  ngOnInit(): void {
    this.service.getJsonFile();

  }

  ngDoCheck(): void {
    if (GlobalConstants.OnInit == true) {
      this.currentPage = 0;
      this.start = 0;
      this.end = this.start + GlobalConstants.pageSize;
      this.loadItems()
      GlobalConstants.OnInit = false;
    }
    this.pagetotal = this.service.length > GlobalConstants.pageSize ? Math.ceil(this.service.length / GlobalConstants.pageSize) : 1
  }
  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (this.pagetotal >= this.currentPage) {
          this.currentPage++;
          this.start = GlobalConstants.OnInit ? 0 : ((this.currentPage - 1) * GlobalConstants.pageSize);
          this.end = this.start + GlobalConstants.pageSize;
          this.loadItems();
        }
      }
    });
    this.observer.observe(this.anchor.nativeElement);
  }

  loadItems() {
    if (GlobalConstants.OnInit == true) {
      this.softwareDataView = GlobalConstants.softwareDataView.slice(this.start, this.end);
      this.currentPage++;
    }
    else {
      this.softwareDataView.push(...GlobalConstants.softwareDataView.slice(this.start, this.end));
    }
  }

  /*
  
    ngDoCheck(): void {
      if(GlobalConstants.OnInit == true)
        this.currentPage=1;
      const start = (this.currentPage - 1) * GlobalConstants.pageSize;
      const end = start + GlobalConstants.pageSize;
      this.pagetotal = this.service.length > GlobalConstants.pageSize ? Math.ceil(this.service.length / GlobalConstants.pageSize) : 1
      this.softwareDataView = GlobalConstants.softwareDataView.slice(start, end);
      GlobalConstants.OnInit=false;
    }
  
  
    pagination(pageno: number = 1) {
      this.currentPage = pageno;
    }
  
    paginationlast() {
      this.currentPage = this.pagetotal;
    }
  
    createRange() {
      return new Array(this.pagetotal).fill(0)
        .map((n, index) => index + 1);
    }
  */

}