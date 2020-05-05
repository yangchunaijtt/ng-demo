import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, AfterContentInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

export interface TopMenu {
  title: String;
  link?: String
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.less']
})
export class ScrollableTabComponent implements OnInit,OnChanges,AfterContentInit,AfterViewChecked,OnDestroy {

  constructor(private route:Router) {
    console.log("组件构造函数")
   }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("组件输入属性变化",changes)
  }
  ngOnInit(): void {
    console.log("组件初始化")
  }
  ngAfterContentInit(): void {
   console.log("组件检测slot插槽")
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("组件视图完成,vue:mounted")
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("组件销毁,vue:destory")
  }
  selectIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() headerBackground = "#fff";
  @Input() titleActiveColor = "brown";
  @Input() titleColor = "#fff";
  @Input() spanBk ="green";
  @Input() defaultBk ="#fff";
  @Output() tabSelected = new EventEmitter();
  handClick(index: number) {
    this.selectIndex = index;
    this.tabSelected.emit(this.menus[this.selectIndex]);
    console.log("点击的参数有",this.menus[this.selectIndex])
    this.route.navigate(['home',this.menus[this.selectIndex].link]);
  };
}
