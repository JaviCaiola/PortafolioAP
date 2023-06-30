import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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

  agregarSkill(){
    const nuevaSkill = {
      nombre : this.nombre,
      url : this.url
    }

    this.apiservice.create(nuevaSkill).subscribe((data:any)=>{
      this.dialogref.close();
    })
  }

  close(){
    this.dialogref.close();
  }



}
