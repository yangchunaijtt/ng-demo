import { Component, OnInit, Injectable, Injector } from '@angular/core';
import { EmjObj } from '../../docorators';
import { ProductModule } from 'src/app/product/product.module';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

// @Injectable()
// class Product  {
//   // private amount:string;
//   constructor(name:string){

//   }
// }
// const Inject = Injector.create({
//   providers:[
//     {
//       provide:Product,
//       useFactory:() => {
//         return new Product("小米手机")
//       }
//     }
//   ]
// })
// console.log("依赖注入",Inject)

export class DemoComponent implements OnInit {
  @EmjObj() result = "hello";
  constructor() { }

  ngOnInit() {

  }
  userName = "";
}
