import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Componentes';
  buttonLabel: string = 'CARRINHO';
  buttonLabel2: string = 'FAVORITOS';
}
