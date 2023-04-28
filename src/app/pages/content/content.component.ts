import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photo: string = ""
  title: string = ""
  description: string = ""
  #id: string | null = "0"

}
