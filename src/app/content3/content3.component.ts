import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content3',
  standalone: true,
  imports: [ToolbarComponent, MatIconModule, MatButtonModule, FormsModule],
  templateUrl: './content3.component.html',
  styleUrl: './content3.component.scss'
})
export class Content3Component {
  toolbarTitle = 'Titolo Dinamico Content3';
} 