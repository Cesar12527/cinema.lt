import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
const URL = environment.imgPath;
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string | null | undefined, size: string='w500'): string {
   if(!img) return 'no-image'

   const imgUrl = URL + size + img;
    return imgUrl;
  }

}
