import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { CcCardHoverConfig } from './model/cc-cardover.config';

@Directive({
  selector: '[ccCardHover]'
})
export class CcCardHoverDirective {

  @HostBinding('class.border-primary')
  private isHovering: boolean = false;

  // moving the query selector to a diective's property
  @Input('ccCardHover')
  config: CcCardHoverConfig;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { 
    
    // renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover')
  onMouseOver() {
    let punchLineEl = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setStyle(punchLineEl, 'display', 'block');
    this.isHovering = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    let punchLineEl = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setStyle(punchLineEl, 'display', 'none');
    this.isHovering = false;
  }

}
