import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';


@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent implements OnInit {

  form: FormGroup;

  comment = new FormControl("", Validators.required); 
  name = new FormControl("", Validators.required); 
  email = new FormControl("", [
    Validators.required,
    Validators.pattern('[^@]*@[^@]*')
  ]);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'comment': this.comment,
      'name': this.name,
      'email': this.email
    });

    this.form.valueChanges.pipe(
      filter(data =>this.form.valid)
    ).subscribe(data => {
      console.log(JSON.stringify(data))
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {}

}
