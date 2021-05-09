import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})

export class QuantityIncrementComponent implements OnInit {
  public counter : number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  msg:string = '';
  clickEvent(){
    this.msg = "Click me button clicked!!";
    return this.msg;
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
}
