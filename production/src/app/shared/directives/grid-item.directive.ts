import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItem]',
})
export class GridItemDirective { 
    constructor(private elr:ElementRef,private rd2:Renderer2){
        this.rd2.setStyle(this.elr.nativeElement,"grid-area","title");
    }
}