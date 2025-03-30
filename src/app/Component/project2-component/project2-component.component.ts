import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-project2-component',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './project2-component.component.html',
  styleUrl: './project2-component.component.css'
})
export class Project2ComponentComponent {

}
