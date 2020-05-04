import { Component, ViewChild, ElementRef } from '@angular/core';
import { TopMenu, ImgSlider, ImgSliderComponent, HorGrid } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  scrollTopBk = "red";
  @ViewChild ("scrollAbleTab") scrollAbleTabs:ElementRef;
  @ViewChild (ImgSliderComponent) ImgSliderComponent:ElementRef;
  topMenu: TopMenu[] = [
    {
      title: "热门",
      link: ""
    },
    {
      title: "热门",
      link: ""
    },
    {
      title: "手机",
      link: ""
    },
    {
      title: "电脑",
      link: ""
    },
    {
      title: "手机",
      link: ""
    },
    {
      title: "男装",
      link: ""
    },
    {
      title: "男装",
      link: ""
    },
    {
      title: "男装",
      link: ""
    },
    {
      title: "男装",
      link: ""
    },
    {
      title: "男装",
      link: ""
    },
    {
      title: "热门",
      link: ""
    },
    {
      title: "热门",
      link: ""
    },
    {
      title: "手机",
      link: ""
    },
    {
      title: "电脑",
      link: ""
    },
    {
      title: "手机",
      link: ""
    },
    {
      title: "男装",
      link: ""
    },
    {
      title: "男装",
      link: ""
    },
    {
      title: "男装",
      link: ""
    },
    {
      title: "男装",
      link: ""
    },
    {
      title: "男装",
      link: ""
    }
  ];
  imgSliders:ImgSlider[] = [
    {
      imgUrl:"//img95.699pic.com/photo/50008/9194.jpg_wh300.jpg",
      link:'',
      caption:"暂无图片"
    },
    {
      imgUrl:"http://img95.699pic.com/photo/50014/4148.jpg_wh300.jpg",
      link:'',
      caption:"暂无图片"
    },
    {
      imgUrl:"//img95.699pic.com/photo/50008/9194.jpg_wh300.jpg",
      link:'',
      caption:"暂无图片"
    },
    {
      imgUrl:"http://img95.699pic.com/photo/50014/4148.jpg_wh300.jpg",
      link:'',
      caption:"暂无图片"
    },
    {
      imgUrl:"//img95.699pic.com/photo/50008/9194.jpg_wh300.jpg",
      link:'',
      caption:"暂无图片"
    },
    {
      imgUrl:"//img95.699pic.com/photo/50008/9194.jpg_wh300.jpg",
      link:'',
      caption:"暂无图片"
    },
    {
      imgUrl:"http://img95.699pic.com/photo/50014/4148.jpg_wh300.jpg",
      link:'',
      caption:"暂无图片"
    },
    {
      imgUrl:"//img95.699pic.com/photo/50008/9194.jpg_wh300.jpg",
      link:'',
      caption:"暂无图片"
    },
    {
      imgUrl:"http://img95.699pic.com/photo/50014/4148.jpg_wh300.jpg",
      link:'',
      caption:"暂无图片"
    },
    {
      imgUrl:"//img95.699pic.com/photo/50008/9194.jpg_wh300.jpg",
      link:'',
      caption:"暂无图片"
    }
  ];
  IconHorData:HorGrid[] = [
    {
      id:1,
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7703/Dn18.png',
      title:"建筑",
      link:''
    },
    {
      id:2,
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7703/Dn18.png',
      title:"建筑",
      link:''
    },
    {
      id:3,
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7703/Dn18.png',
      title:"建筑",
      link:''
    },
    {
      id:4,
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7703/Dn18.png',
      title:"建筑",
      link:''
    },
    {
      id:5,
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7703/Dn18.png',
      title:"建筑",
      link:''
    },
    {
      id:6,
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7703/Dn18.png',
      title:"建筑",
      link:''
    },
    {
      id:7,
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7703/Dn18.png',
      title:"建筑",
      link:''
    },
    {
      id:8,
      icon:'http://pics.sc.chinaz.com/Files/pic/icons128/7703/Dn18.png',
      title:"建筑",
      link:''
    },
  ];
  handChange(tabItem:TopMenu){
    console.log(tabItem)
  };
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("app首页",this.scrollAbleTabs);
    console.log("app首页",this.ImgSliderComponent);
  }
}
