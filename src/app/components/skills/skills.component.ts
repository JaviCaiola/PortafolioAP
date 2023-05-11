import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { FormeditComponent } from '../formedit/formedit.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  
  constructor(private _dialog: MatDialog){
  }

  agregarskill() {
    console.log("machooo")
    this._dialog.open(FormeditComponent)
  }
}
