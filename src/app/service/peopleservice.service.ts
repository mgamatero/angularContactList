import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
//npm -i rxjs-compat --save in terminal

const baseUrl = 'http://localhost:4701/contacts/';


@Injectable({
  providedIn: 'root'
})
export class PeopleserviceService {

  constructor(private http: HttpClient) { }

  getContactDetails(id: number): Observable<Contact> {
    
    return this.http.get(baseUrl+id).map(data => data as Contact)
    // let contact = new Contact();
    // contact.id = id;
    // contact.firstname = "Mike";
    // contact.lastname = "G";
    // contact.gender = "Male";
    // contact.phone = "1234567891";
    // contact.dob = "1975-09-09";
    // contact.city = "Tustin";
    // contact.state = "CA";
    // contact.country = "USA";
    // contact.email = "mgamatero@gmail.com";
    // contact.picture = "../../assets/image/mikeg.jpg"
    // return contact;
  }

  addNewContact(contact: Contact):Observable<Contact>{
  return this.http.post(baseUrl,contact).map(data => data as Contact)
}


  getAllContacts(pageNumber:number=1): Observable <Contact[]> {
    let params = {
      '_page':''+pageNumber
    }
        return this.http.get(baseUrl, {params}).map(data=>data as Contact[])
  }

  updateContact(contact:Contact):Observable<Contact>{
    return this.http.put(baseUrl+contact.id,contact).map(data=>data as Contact)
  }

  deleteContact(id:number):Observable<any>{
    return this.http.delete(baseUrl+id)
  }
}
