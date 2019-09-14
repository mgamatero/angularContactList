import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { PeopleserviceService } from 'src/app/service/peopleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mySW-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact:Contact;
  
  constructor(private api:PeopleserviceService,
              private router:Router) { }

  ngOnInit() {
    this.contact = new Contact;
    
   
  }

  addContact(){
    this.api.addNewContact(this.contact).subscribe(data=>{
      if(!confirm('Are you sure?')){
        return
      }
console.log(this.contact.id)
        this.router.navigate(['/contact-details',data.id])
      
    })
  }
}
