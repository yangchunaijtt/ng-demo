import { Component } from '@angular/core';
import { TopMenu } from './components';

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
  handChange(tabItem:TopMenu){
    console.log(tabItem)
  };
}
