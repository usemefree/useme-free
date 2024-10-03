import { Component, OnInit } from '@angular/core';
import { category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { jsonDataResult } from '../../models/jsonDataResult';
import { CommonModule } from '@angular/common';
import {GlobalConstants} from '../../common/global-constants';

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

  constructor(private service: CategoryService) {  }

  ngOnInit(): void {
    this.service.getJSON();
  }
  ngDoCheck():void{
    this.length=this.service.length;
    this.cat=GlobalConstants.categoryData;
  }

  setKey(id: number): void {
    GlobalConstants.currentcategory = id;
    console.log(GlobalConstants.currentcategory);
  }
}
