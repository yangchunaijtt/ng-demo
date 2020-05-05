import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HorGrid, ImgSlider, ImgSliderComponent,DemoComponent } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  selectedLink ="hot";
  @ViewChild (ImgSliderComponent) ImgSliderComponent:ElementRef;
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
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      
      this.selectedLink= params.get('targetLink');
      console.log("params",params,this.selectedLink);
    })
  }

}
