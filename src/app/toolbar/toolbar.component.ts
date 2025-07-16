import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  readonly router = inject(Router);

  goToContent2() {
    this.router.navigate(['/accesso']);
  }
  
  goToContent1() {
    this.router.navigate(['/home']);
  }
  
}
