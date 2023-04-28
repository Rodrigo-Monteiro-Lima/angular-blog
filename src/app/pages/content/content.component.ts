import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photo: string = ""
  title: string = ""
  description: string = ""
  #id: string | null = "0"

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.#id = param.get('id');
    });
    this.setValues(this.#id);
  }

  setValues = (id: string | null) => {
    const result = fakeData.find((item) => item.id === id);
    if (result) {
      this.photo = result.photo;
      this.title = result.title;
      this.description = result.description;
    }
  }

}
