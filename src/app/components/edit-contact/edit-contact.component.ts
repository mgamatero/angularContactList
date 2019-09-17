import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PeopleserviceService } from 'src/app/service/peopleservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'mySW-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private api: PeopleserviceService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.api.getContactDetails(params.id)
      .subscribe(contact => {
        console.log(contact)
          this.contactForm.setValue({...contact})
        })
      })
    

    this.contactForm = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      dob: new FormControl(),
      picture: new FormControl('../../model/assets/image/mikeg.jpg')
    });


  }

  updateInfo(){
    if (!confirm('Are you sure?')){
      return
    }

    this.api.updateContact(this.contactForm.value)
      .subscribe(contact=>{
        this.router.navigate(['/contact-details',contact.id])
    })
  }

}
