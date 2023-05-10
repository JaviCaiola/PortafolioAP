import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild("mi_template") mi_template!: ElementRef;

  showTemplate: boolean = false;

  toggleTemplate() {
    this.showTemplate = !this.showTemplate;
  }

}
