import { Component, inject, Input, input, OnInit, Output, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appService } from './app.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, JsonPipe],
  template: '<router-outlet></router-outlet>',
  providers: [appService]
})
export class AppComponent {
  logoPath = 'assets/image/mike.movie.png';

}