import { Component, OnInit, Input } from '@angular/core';

export interface HorGrid {
  id:number,
  icon:string,
  link:string,
  title:string,
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() horData:HorGrid[] = [];
  result = 'hello';
}
