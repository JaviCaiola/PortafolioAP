import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { FormeditComponent } from '../formedit/formedit.component';
import { EditskillComponent } from '../editskill/editskill.component';
import { Skill } from 'src/app/model/ObjSkill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillo = Array<Skill>;

  constructor(private _dialog: MatDialog){
    //this.skillo = new Array<Skill>();
  }

  agregarskill() {
    this._dialog.open(FormeditComponent);
  }

  editarComponente( ){
    this._dialog.open(EditskillComponent);
  }
}
