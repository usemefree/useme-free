import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainmenuComponent } from "./components/mainmenu/mainmenu.component";
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { SoftwarelistComponent } from './components/softwarelist/softwarelist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainmenuComponent,
    CategoryComponent,
    SoftwarelistComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'useme-free';
}
