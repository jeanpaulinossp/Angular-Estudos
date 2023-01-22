import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Jean Paulino';
  userData = {
    email: 'jean@gmail.com',
    role: 'Admin',
  };
  title = 'curso-angular';
}
