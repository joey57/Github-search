import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

    @HostListener('mouseenter') onMouseEnter(){
      this.highlight('teal');
    }
    @HostListener('mouseleave') onMouseLeave(){
      this.highlight("Null");

    }
    private highlight(color: string){
      this.elem.nativeElement.style.backgroundColor = color;
    }
  

}
