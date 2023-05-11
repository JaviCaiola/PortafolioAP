import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { FormeditComponent } from './components/formedit/formedit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'protectoFinalAp';

  constructor(private _dialog: MatDialog){
  }

  agregarskill() {
    console.log("machooo")
    this._dialog.open(FormeditComponent)
  }
}
