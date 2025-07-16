import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-content2',
  imports: [CommonModule, ToolbarComponent],
  templateUrl: './content2.component.html',
  styleUrl: './content2.component.scss'
})
export class Content2Component {

}
