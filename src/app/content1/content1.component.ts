import { Component } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-content1',
  imports: [ToolbarComponent, MatIconModule],
  templateUrl: './content1.component.html',
  styleUrl: './content1.component.scss'
})
export class Content1Component {

}
