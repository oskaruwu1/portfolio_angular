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
  trackByItemId(index: number, item: any): number {
    return item.id;
  }


  constructor() {
    this.galleries = Galleries;
  }
}
