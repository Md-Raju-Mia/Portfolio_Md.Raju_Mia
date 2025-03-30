import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-project4-component',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './project4-component.component.html',
  styleUrl: './project4-component.component.css'
})
export class Project4ComponentComponent {

}
