import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
constructor(
  private parametrizador: ActivatedRoute,
  private navegador: Router,
  ){
  //recupera id www.husdhdus.com.br/{} sem rota filha
this.parametrizador.params.subscribe(
  res => console.log(res)
  )
  //recupera query www.husdhdus.com.br/name&date sem rota filha
  this.parametrizador.queryParams.subscribe(
    res=>console.log(res)
  )
  //recupera query www.husdhdus.com.br/name&date com rota filha
 this.parametrizador.firstChild?.params.subscribe(
  res=>console.log(res)
)
}

  ngOnInit(): void {
    //redireciona para algum lugar apos 5000ms
   // setInterval(()=>{
//this.navegador.navigate(['/'])
    //},5000)
  }
}
