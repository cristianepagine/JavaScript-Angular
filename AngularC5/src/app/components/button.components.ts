import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.components.html',
  styleUrls: ['./button.components.css'],
})
export class Button {
  @Input() label: string | undefined;
  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['VENDER', 'COMPRAR'];
  buttonNumber: number = 1;
  buttonObject = {
    label: 'adicionar ao carrinho',
  };

  getAlert(num: number) {
    alert(num);
  }
}