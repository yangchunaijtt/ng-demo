import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewChecked, Renderer2, ChangeDetectionStrategy } from '@angular/core';

export interface ImgSlider {
  imgUrl:string;
  link:string;
  caption:string;
}

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ImgSliderComponent implements OnInit,AfterViewChecked {
  @Input() sliders:ImgSlider[] = [];
  @ViewChild('imgCatiner',{static:true}) ImgCatiner:ElementRef;
  @ViewChildren('img') imgs:QueryList<ElementRef>;
  constructor(private rd2:Renderer2) { }

  ngOnInit() {
    console.log("子组件",this.ImgCatiner);
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("组件视图完成,vue:mounted",this.imgs);
    this.imgs.forEach(item=>{
      this.rd2.setStyle(item.nativeElement,"height","200px");
    })
  }
}
