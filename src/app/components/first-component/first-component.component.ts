import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Jardel"
  Age: number = 30;
  formacao  = {
    Bacharel: 'Ciências contábeis',
    MBA: 'Financças Corporativas',
    Mestrado: 'UFMG - FACE',
  };

  Hobbies = ["Correr", "Sair com os amigos", "Cinema com a namorada", "almoçar com a família nos domingos"]
  
  constructor() { }

  ngOnInit(): void {
  }

}
