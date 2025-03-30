import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, FooterComponent,FormsModule,NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  // onSubmit() {
  //   // Handle form submission
  //   this.http.post('/api/contact', this.contactData).subscribe({
  //     next: (response) => {
  //       console.log('Form submitted successfully', response);
  //       // Reset form or show success message
  //     },
  //     error: (error) => {
  //       console.error('Error submitting form', error);
  //       // Show error message
  //     }
  //   });
  // }
  onSubmit(){
      alert("Please contact me via email or WhatsApp.")
  }
}
