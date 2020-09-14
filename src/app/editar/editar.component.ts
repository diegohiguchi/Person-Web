import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonPhoneService } from '../service/service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PersonPhone } from '../model/person-phone';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private personPhoneService: PersonPhoneService,
    private router: Router,
    private route: ActivatedRoute) { }

  personPhone: any;
  personPhoneForm: FormGroup;
  id: number;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.personPhoneForm = this.formBuilder.group({
      businessEntityID: [],
      phoneNumber: ['', Validators.required],
      phoneNumberTypeID: ['', Validators.required]
    });

    this.personPhoneService.obterPorId(this.id)
      .subscribe(data => {
        this.personPhone = data;
        this.personPhoneForm.controls['phoneNumber'].setValue(this.personPhone.data.exampleObjects[0].phoneNumber);
        this.personPhoneForm.controls['phoneNumberTypeID'].setValue(this.personPhone.data.exampleObjects[0].phoneNumberTypeID);
      });
  }

  onSubmit() {
    const personPhone = new PersonPhone();
    personPhone.businessEntityID = this.id;
    personPhone.phoneNumber = this.personPhoneForm.controls['phoneNumber'].value;
    personPhone.phoneNumberTypeID = this.personPhoneForm.controls['phoneNumberTypeID'].value;

    this.personPhoneService.editar(personPhone)
      .subscribe(data => {
        this.router.navigate(['']);
      },
        error => {
          alert(error);
        });
  }
}
