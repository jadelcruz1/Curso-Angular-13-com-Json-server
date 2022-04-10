import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  classes = [ 'teste1', 'teste2'];

  size = 40 ;
  font = 'arial';
  color = 'red';
  width = 50;
  height = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
