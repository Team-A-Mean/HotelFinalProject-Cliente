import { AppRoutingModule } from './app-routing.module';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppRoutingModule]
})
export class AppComponent {
  title = 'app works!';
}
