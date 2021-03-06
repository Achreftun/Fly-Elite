import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  checkInForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.checkInForm = this.formbuilder.group({
      flightNumber: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required]
    });
  }

  onSubmitCheckInForm() {
    console.log(this.checkInForm.value);
  }

}
