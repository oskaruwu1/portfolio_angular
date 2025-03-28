import { Pipe, PipeTransform } from '@angular/core';
import { IGallery } from '../post/interfaces/IGallery';

@Pipe({
  name: 'searchGalleries',
  standalone: false
})
export class SearchGalleriesPipe implements PipeTransform {
  galleries: any;
  year: number = 0;

  transform(value: any, ...args: any[]): any {
    this.galleries = value;
    if (args) {
      this.galleries = this.galleries.filter((gallery: IGallery) => {
        this.year = args[1] ? new Date(gallery.dateCreated).getFullYear() : 0
        return ((gallery.title.toLowerCase().indexOf(args[0].toLowerCase()) !== -1) || (gallery.description.toLowerCase().indexOf(args[0].toLowerCase()) !== -1)) && (this.year == parseInt(args[1]));
      })
      console.log(this.galleries)
    }else{
      this.galleries = value;
    }

    return this.galleries;
  }
}

