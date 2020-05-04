import { Component, OnInit } from '@angular/core';
import { EmjObj } from '../../docorators';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @EmjObj() result ="hello";
  constructor() { }
 
  ngOnInit() {
  }
  userName ="";
}
