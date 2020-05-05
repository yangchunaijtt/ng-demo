import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ScrollableTabComponent, ImgSliderComponent, DemoComponent } from './components';
import { GridItemDirective } from './directives/grid-item.directive';
import { HorizontalGridComponent } from './components/horizontal-grid';
import { GridItemImageDirective, GridItemTitleDirective } from './directives';
import { AgoPipe } from './pipes';


@NgModule({
  declarations: [
    DemoComponent,
    ScrollableTabComponent,
    ImgSliderComponent,
    GridItemDirective,
    HorizontalGridComponent,
    GridItemImageDirective,
    GridItemDirective,
    GridItemTitleDirective,
    AgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    DemoComponent,
    ScrollableTabComponent,
    ImgSliderComponent,
    GridItemDirective,
    HorizontalGridComponent,
    GridItemImageDirective,
    GridItemDirective,
    GridItemTitleDirective,
    AgoPipe
  ]
})
export class SharedModule { }
