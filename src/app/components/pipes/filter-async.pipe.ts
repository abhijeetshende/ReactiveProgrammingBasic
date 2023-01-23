import { Pipe, PipeTransform } from '@angular/core';
import { timeout } from 'rxjs';

@Pipe({
  name: 'upperCaseAsync'
})
export class FilterAsyncPipe implements PipeTransform {

  transform(value: string): Promise<string> {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        return resolve(value.toUpperCase());
      },5000)
    })
  }

}
