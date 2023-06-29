import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-session',
  templateUrl: './form-session.component.html',
  styleUrls: ['./form-session.component.css']
})
export class FormSessionComponent{
  form:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.form = this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        contraseña:['',[Validators.required, Validators.minLength(15)]]
      }
    )
  }

  ngOnInit(): void {

  }


}
