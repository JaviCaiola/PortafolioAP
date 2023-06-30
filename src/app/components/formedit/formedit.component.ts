import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Skill } from 'src/app/model/ObjSkill';
import { AuthtenticationService } from 'src/app/service/authtentication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-formedit',
  templateUrl: './formedit.component.html',
  styleUrls: ['./formedit.component.css']
})
export class FormeditComponent {

  skillo :Array<Skill>;
  form : FormGroup;

  constructor (public dialogref : MatDialogRef<FormeditComponent>, fb : FormBuilder, private skService : AuthtenticationService){
    this.skillo = new Array<Skill>();
    this.form = fb.group({
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
