import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormSessionComponent } from '../form-session/form-session.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _dialog: MatDialog){
  }

  iniciarSession(){
    this._dialog.open(FormSessionComponent);
   }

}
