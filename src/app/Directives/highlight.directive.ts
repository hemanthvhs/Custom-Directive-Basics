import {Directive, ElementRef, OnInit, Renderer2, Input, HostListener, HostBinding} from '@angular/core'

@Directive ({
    selector : '[apphighlight]'
})
export class HighlightDirective implements OnInit {

@Input() color : string

@Input() defaultColor : string



constructor(private elementRef : ElementRef,
            private renderer : Renderer2) {}

ngOnInit() {
    this.getColor('Orange')
}


@HostListener('mouseenter') onmouseenter() {
    this.getColor(this.color || this.defaultColor)
}

 getColor(color : string) {
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color',color)
}

}