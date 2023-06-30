import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Skill } from 'src/app/model/ObjSkill';
import { AuthtenticationService } from 'src/app/service/authtentication.service';

@Component({
  selector: 'app-agregarskill',
  templateUrl: './agregarskill.component.html',
  styleUrls: ['./agregarskill.component.css']
})
export class AgregarskillComponent {

  skill : Array<Skill>;
  form : FormGroup;

  constructor(public dialogref : MatDialogRef<AgregarskillComponent>,fb : FormBuilder, private skService:AuthtenticationService){
    this.skill = new Array<Skill>();
    this.form =  fb.group({
      nombre : new FormControl('',[Validators.required]),
      url : new FormControl('', [Validators.required])
    })
  }

  crearSkill(){
    if(this.form.valid){
      let skill = new Skill();
      skill.nombre = this.form.get('nombre')?.value;
      skill.url = this.form.get('url')?.value;
      this.skService.create(skill).subscribe(res => {
        this.form.reset()
      })
    }
  }



  close(){
    this.dialogref.close();
  }
 
}
