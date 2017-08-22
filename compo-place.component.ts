import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo-place',
  template: `<p>
  <a href="https://placeholder.com"><img src="http://via.placeholder.com/350x150"></a></p>`,
  styleUrls: ['./compo-place.component.css']
})
export class CompoPlaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
