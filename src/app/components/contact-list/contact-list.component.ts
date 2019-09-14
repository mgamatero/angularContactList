import { Component, OnInit } from '@angular/core';
import { PeopleserviceService } from 'src/app/service/peopleservice.service';
import { Contact } from 'src/app/model/contact';


@Component({
  selector: 'mySW-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  pageNum:number =  1;

  constructor(private api: PeopleserviceService) { }

  ngOnInit() {
    this.api.getAllContacts().subscribe(data => this.contacts = data);

  }

  loadMore() {
    this.pageNum++;
    
    this.api.getAllContacts(this.pageNum).subscribe(data => {
      this.contacts = [...this.contacts, ...data]
      
    }
    ); //spread operator
    
  }

}
