import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-project3-component',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './project3-component.component.html',
  styleUrl: './project3-component.component.css'
})
export class Project3ComponentComponent {

}
