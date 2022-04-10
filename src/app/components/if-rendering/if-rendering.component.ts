import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-rendering',
  templateUrl: './if-rendering.component.html',
  styleUrls: ['./if-rendering.component.scss']
})
export class IfRenderingComponent implements OnInit {
  canShow: boolean = true;
  name = 'Carlos';
  password = 123456;

  constructor() { }

  ngOnInit(): void {
  }

}
