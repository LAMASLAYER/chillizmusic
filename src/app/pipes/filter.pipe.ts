import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(musics: any, term: any): boolean {
    if (term === undefined) {return musics;}

    return musics.filter(function (music) {
      return music.name.includes(term);
    });

  }
}
