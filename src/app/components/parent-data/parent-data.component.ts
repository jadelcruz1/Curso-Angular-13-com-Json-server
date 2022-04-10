import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {
 @Input() name: string = '';
 @Input() numbe = '';
 @Input() dados!: {email: string, apelido: string, idade: number};

  constructor() { }

  ngOnInit(): void {
  }

}
