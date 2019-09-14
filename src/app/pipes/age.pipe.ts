import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob : string, flag?:number): string {
    if(!dob){
      return ''
    }
let dt1 = new Date(dob);
let diff = Date.now() - dt1.getTime();
let dt2= new Date(diff);
let year = dt2.getFullYear()-1970;
let month = dt2.getMonth();
let days = dt2.getDate();

let output = '';

switch(flag){
  case 2:
      output =`(${year} years, ${month} month(s) old)` 
    break;
  case 3:
      output =`(${year} years, ${month} month(s), ${days} day(s) old)`
    break;

    case 1:
        
      
      default: 
      output = output =`(${year} years old)`
}

    return output;
  }

}
