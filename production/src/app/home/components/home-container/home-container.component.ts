import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {  TopMenu } from 'src/app/shared/components';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }
  scrollTopBk = "red";
  @ViewChild ("scrollAbleTab") scrollAbleTabs:ElementRef;
  topMenu: TopMenu[] = [
    {
      title: "热门",
      link: "hot"
    },
    {
      title: "热门",
      link: "men"
    },
    {
      title: "手机",
      link: "departmen"
    },
    {
      title: "电脑",
      link: "compute"
    },
    {
      title: "手机",
      link: "phone"
    },
    {
      title: "男装",
      link: "man1"
    },
    {
      title: "男装",
      link: "man2"
    },
    {
      title: "男装",
      link: "man23"
    },
    {
      title: "男装",
      link: "man24"
    },
    {
      title: "男装",
      link: "man25"
    },
    {
      title: "热门",
      link: "man6"
    },
    {
      title: "热门",
      link: "man7"
    },
    {
      title: "手机",
      link: "man8"
    },
    {
      title: "电脑",
      link: "man9"
    },
    {
      title: "手机",
      link: "man0"
    },
    {
      title: "男装",
      link: "hot1"
    },
    {
      title: "男装",
      link: "hot2"
    },
    {
      title: "男装",
      link: "hot3"
    },
    {
      title: "男装",
      link: "hot4"
    },
    {
      title: "男装",
      link: "hot5"
    }
  ];
  
  handChange(tabItem:TopMenu){
    console.log(tabItem)
  };
  ngOnInit() {
  }

}
