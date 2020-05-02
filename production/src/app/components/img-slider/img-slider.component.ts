import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

export interface ImgSlider {
  imgUrl:string;
  link:string;
  caption:string;
}

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  @Input() sliders:ImgSlider[] = [];
  @ViewChild('imgCatiner',{static:true}) ImgCatiner:ElementRef;
  constructor() { }

  ngOnInit() {
    console.log("子组件",this.ImgCatiner);
  }

}
