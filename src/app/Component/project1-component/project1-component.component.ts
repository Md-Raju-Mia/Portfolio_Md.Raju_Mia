import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-project1-component',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './project1-component.component.html',
  styleUrl: './project1-component.component.css'
})
export class Project1ComponentComponent {

}
