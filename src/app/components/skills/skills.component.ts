import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { EditskillComponent } from '../editskill/editskill.component';
import { AgregarskillComponent } from '../agregarskill/agregarskill.component';
import { Skill } from 'src/app/model/ObjSkill';
import { AuthtenticationService } from 'src/app/service/authtentication.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skill : Array<Skill>;

  constructor(private _dialog: MatDialog, private skService:AuthtenticationService){
    this.skill = new Array<Skill>();
  }

  //INTERFACES QUE SE DESPLIEGAN
  ventanaadd() {
    this._dialog.open(AgregarskillComponent);
  }

  editarComponente( ){
    this._dialog.open(EditskillComponent);
  }

  //FUNCIONES DE LOS BOTONES Y OBTENCION DE DATOS
  getSkill(){
    this.skService.getAll().subscribe(res =>{
      this.skill = res;
    })
  }
  deleteSkill(id : number){
    this.skService.delete(id).subscribe(res =>{
      this.getSkill();
    })
  }
}
