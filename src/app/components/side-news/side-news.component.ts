import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-news',
  templateUrl: './side-news.component.html',
  styleUrls: ['./side-news.component.css']
})
export class SideNewsComponent {
  @Input()
  photo: string = ""

  @Input()
  title: string = ""

  @Input()
  id: string = "0"

}
