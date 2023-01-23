import { Pipe, PipeTransform } from '@angular/core';
import { user } from './user.type';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: user[], filterString: string): user[] {
    let filteredUser: user[] = [];
    for (const user of value) {
      if (user.name.toLocaleUpperCase().startsWith(filterString.toLocaleUpperCase())) {
        filteredUser.push(user);
      }
    }
    console.log(filteredUser);
    
    return filteredUser;
  }
}
