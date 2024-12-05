import { Component, OnInit } from '@angular/core';
import { category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { jsonDataResult } from '../../models/jsonDataResult';
import { CommonModule } from '@angular/common';
import {GlobalConstants} from '../../common/global-constants';
import { SoftwarelistService } from '../../services/softwarelist.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  
  cat: category[] = [];
  length: number = 0;

  constructor(private service: CategoryService, private sService: SoftwarelistService) {  }

  ngOnInit(): void {
    this.service.getJSON();
  }
  ngDoCheck():void{
    this.length=this.service.length;
    this.cat=GlobalConstants.categoryData;
  }

  setKey(id: number): void {
    GlobalConstants.currentcategory = id;
    GlobalConstants.OnInit = true;
    this.sService.getJsonFile();
   // console.log(GlobalConstants.currentcategory);
  }
}
