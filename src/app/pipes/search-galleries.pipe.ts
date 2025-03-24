import { Pipe, PipeTransform } from '@angular/core';
import { IGallery } from '../post/interfaces/IGallery';

@Pipe({
  name: 'searchGalleries',
  standalone: false
})
export class SearchGalleriesPipe implements PipeTransform {
  galleries: any;

  transform(value: any, ...args: string[]): any {
    this.galleries = value;
    if (args) {
      this.galleries = this.galleries.filter((gallery: IGallery) => {
        return (gallery.title.indexOf(args[0]) !== -1) || (gallery.description.indexOf(args[0]) !== -1);
      })
      console.log(this.galleries)
    }else{
      this.galleries = value;
    }

    return this.galleries;
  }
}

