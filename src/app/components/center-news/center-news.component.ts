import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-center-news',
  templateUrl: './center-news.component.html',
  styleUrls: ['./center-news.component.css']
})
export class CenterNewsComponent {
  @Input()
  photo: string = ""
  @Input()
  title: string = ""
  @Input()
  description: string = ""
  @Input()
  id: string = "0"

}
