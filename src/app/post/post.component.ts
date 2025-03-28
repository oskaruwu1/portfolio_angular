import { Component } from '@angular/core';
import { IGallery } from './interfaces/IGallery';
import { Galleries } from './constants/galleries.constant';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  galleries: IGallery[];
  searchValue: string;
  searchYear: number;
  trackByItemId(index: number, item: any): number {
    return item.id;
  }
  setYear(year: number){
    this.searchYear = year;
    return null;
  }

  constructor() {
    this.galleries = Galleries;
    this.searchValue = "";
    this.searchYear = 0;
  }
}
