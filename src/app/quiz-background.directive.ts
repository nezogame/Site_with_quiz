import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appQuizBackground]',
  standalone: true
})
export class QuizBackgroundDirective {

  @Input() correctAnswer: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onAnswered() {
    console.log("work")
    if (this.correctAnswer) {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    }
  }
}
