import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog'
import { EditskillComponent } from '../editskill/editskill.component';
import { AgregarskillComponent } from '../agregarskill/agregarskill.component';
import { Skill } from 'src/app/model/ObjSkill';
import { AuthtenticationService } from 'src/app/service/authtentication.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skill : any[]=[];
  form : FormGroup;

  constructor(private _dialog: MatDialog, fb : FormBuilder, private skService:AuthtenticationService){
    this.skill = new Array<Skill>();
    this.form =  fb.group({
      nombre : new FormControl('',[Validators.required]),
      url : new FormControl('', [Validators.required])
    })
  }

  ngOnInit():void{
    this.getSkill();
  }

  //INTERFACES QUE SE DESPLIEGAN
  /*
  ventanaadd() {
    this._dialog.open(AgregarskillComponent);
  }

  editarComponente( ){
    this._dialog.open(EditskillComponent);
  }
*/
  //FUNCIONES DE LOS BOTONES Y OBTENCION DE DATOS
  getSkill():void{
    this.skService.getAll().subscribe(res =>{
      this.skill = res;
    })
  }
  crearSkill(){
    if(this.form.valid){
      let skill = new Skill();
      skill.nombre = this.form.get('nombre')?.value;
      skill.url = this.form.get('url')?.value;
      this.skService.create(skill).subscribe(res => {
        this.getSkill()
        window.location.reload();
        this.form.reset();
      })
      console.log("creado")
      console.log(skill)
    }
  }
  deleteSkill(id : number){
    this.skService.delete(id).subscribe(res =>{
      this.getSkill();
    })
  }
}
