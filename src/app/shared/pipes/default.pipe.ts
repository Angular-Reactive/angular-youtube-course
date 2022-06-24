import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  /**
   * 
   * @param value Value pass in into the pipe
   * @param fallback  arguments passed into the pipe
   * @returns 
   */
  transform(value: string, fallback: string, forcesHttps: boolean = false): unknown {
    let image = '';

    if(value) {
      image = value;
    } else {
      image = fallback;
    }

    if(forcesHttps) {
      if(image.indexOf('https') === -1) {
        image = image.replace('http', 'https');
      }
    }

    return image;
  }

}
