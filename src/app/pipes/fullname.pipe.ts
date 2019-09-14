import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(contact: Contact): string {
    let combinedName = contact.firstname + ' ' + contact.lastname;
    return contact.gender==='Male' ? 'Mr. '+ combinedName : 'Ms.  '+ combinedName;
  }

}
