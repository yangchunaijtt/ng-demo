import { Component } from '@angular/core';
import { TopMenu, ImgSlider } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  scrollTopBk = "red";
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
  handChange(tabItem:TopMenu){
    console.log(tabItem)
  };
}
