import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthShorter'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    console.log("agruments",args);
    
    if(value.length > 5){
      return value.slice(0,5)+ '...';
    }
    else{
      return value;
    }
  }

}
