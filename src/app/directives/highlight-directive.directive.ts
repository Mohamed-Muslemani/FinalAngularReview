import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
  standalone: true
})
export class HighlightDirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  //Listen for mouseenter and mouseleave events

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow'); // Highlight the name on hover
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor'); // Remove highlight when hover ends
  }
}
