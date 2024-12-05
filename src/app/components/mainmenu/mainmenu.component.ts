import { Component, OnInit } from '@angular/core';
import { mainMenu } from '../../models/mainMenu';
import { MainmenuService } from '../../services/mainmenu.service';
import { CommonModule } from '@angular/common';
import { GlobalConstants } from '../../common/global-constants';
import { SoftwarelistService } from '../../services/softwarelist.service';

@Component({
  selector: 'app-mainmenu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent implements OnInit {
  mainmenu: mainMenu[] = [];
  length: number = 0;

  constructor(private service: MainmenuService, private sService: SoftwarelistService) { }

  ngOnInit(): void {
    this.service.getJSON();

  }
  ngDoCheck(): void {
    this.length = this.service.length;
    this.mainmenu = GlobalConstants.mainMenuData;
  }

  setKey(id: number): void {
    GlobalConstants.currentcategory=0;
    GlobalConstants.currentOperatingS = id;
    GlobalConstants.OnInit = true;
    this.sService.getJsonFile();
  }

}
