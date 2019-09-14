import { Component, OnInit, APP_ID } from '@angular/core';
import { Contact } from '../../model/contact';
import { PeopleserviceService } from '../../service/peopleservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'mySW-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private api:PeopleserviceService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { //do this here, not like api in sote

  }
  contact: Contact = new Contact();


  ngOnInit() {
    
    
   this.activatedRoute.params.subscribe(paramsid=>{
     this.api.getContactDetails(paramsid['id']).subscribe(data=>this.contact=data)
   })

    //THIS CODE BLOCK ENDED UP IN SERVICES, before server stuff
  //   this.contact = new Contact();
  //   this.contact.id = 1;
  //   this.contact.firstname = "Mike";
  //   this.contact.lastname = "G";
  //   this.contact.gender = "Male";
  //   this.contact.phone = "1234567891";
  //   this.contact.dob = "9/9/1975";
  //   this.contact.city = "Tustin";
  //   this.contact.state = "CA";
  //   this.contact.country = "USA";
  //   this.contact.email = "mgamatero@gmail.com";
  //   this.contact.picture = "../../assets/image/mikeg.jpg"
  }

  deleteContact(){
      if(!confirm('Are you sure?')){
        return;
      }
      
      this.api.deleteContact(this.contact.id).subscribe(()=>{
        this.router.navigate(['/contact-list']);
      })
   
   
  }
}
