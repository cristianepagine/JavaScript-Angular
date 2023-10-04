import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements  OnInit, OnChanges{
  //input significa que quem chama esse valor na tela pode imputar valor na var
  @Input() nome:string =''
  constructor() {
    console.log(`construtor ${this.nome}`)
  }

  ngOnChanges(): void {
    console.log("on change")
      }

  ngOnInit(): void {
    this.nome= `Olá ${this.nome}`;
  }
}
