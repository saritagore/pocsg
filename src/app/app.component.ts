import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnfooterComponent } from "./btnfooter/btnfooter.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BtnfooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'saritapoc';
}
