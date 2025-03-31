import { Component } from '@angular/core';
import { Galleries } from './post/constants/galleries.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio - Oskar Labuda';
  description = "podruze, lubie podruze, lubie podruzowac z dawidem";
  galleries = Galleries;
  changeDesc(description: string){
    this.description = description;
  }
}
