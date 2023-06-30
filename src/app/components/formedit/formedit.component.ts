import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Skill } from 'src/app/model/ObjSkill';
import { AuthtenticationService } from 'src/app/service/authtentication.service';

@Component({
  selector: 'app-formedit',
  templateUrl: './formedit.component.html',
  styleUrls: ['./formedit.component.css']
})
export class FormeditComponent {

  constructor (
    private apiservice: AuthtenticationService,
    public dialogref : MatDialogRef<FormeditComponent>
  ){
  }
/*
  agregarSkill(){
    skill = Skill;
    this.apiservice.create(skill).subscribe((data:any)=>{
      this.dialogref.close();
    })
  }
*/
  close(){
    this.dialogref.close();
  }



}
