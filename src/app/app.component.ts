import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Jhon';

  numbe = '31982932760';

  dados = {
    email: 'jardelcruz6@gmail.com',
    apelido: 'jards',
    idade: 37,
  };

  title = 'my-first-project';
}
