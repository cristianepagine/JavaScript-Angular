import { Component, Input } from '@angular/core';
@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  //buttonText: String = 'ACESSAR';
  //buttonTexts: string[]=['VENDER','COMPRAR'];
  //recebendo o dado do componente pai:
  @Input() label: string = '';

  //adicionando um evento a um botão
  //é possivel tambem passar parametro e usar o this. para retornar
  getAlert() {
    alert('ola');
  }
}
