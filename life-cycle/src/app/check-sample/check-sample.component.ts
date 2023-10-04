import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    AfterContentInit,
    OnDestroy
{
  quantidade: number = 0;
  constructor() {}
  adicionar() {
    this.quantidade += 1;
  }
  remover() {
    this.quantidade += -1;
  }
  //check -> content ->view

  ngOnInit(): void {}
  //quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log('afterviewinit');
  }
  //depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('afterviewinit');
  }

  //após alguma alteração, verifica o conteudo
  ngAfterContentChecked(): void {
    console.log('aftercheck');
  }
  //apos alguma alteração verifica a view
  ngAfterViewChecked(): void {
    console.log('afterviewcheck');
  }

  ngDoCheck(): void {
    console.log('Docheck');
  }
  ngOnDestroy(): void {
    console.log('Bye bye');
  }
}
