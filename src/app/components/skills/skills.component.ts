import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { FormeditComponent } from '../formedit/formedit.component';
import { EditskillComponent } from '../editskill/editskill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  

  constructor(private _dialog: MatDialog){
    
  }
  agregarskill() {
    this._dialog.open(FormeditComponent);
  }

  editarComponente( ){
    this._dialog.open(EditskillComponent);
  }
}
