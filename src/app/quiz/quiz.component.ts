import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';
import { QuizBackgroundDirective } from '../quiz-background.directive';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuizBackgroundDirective, HeaderComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {

  quizzes: Quiz[] = [];

  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  result = false;

  constructor(private quizeServise: QuizService) {
  }

  ngOnInit(): void {
    this.quizzes = this.quizeServise.getQuizzes();
  }

  onAswer(option: boolean) {
    if (option) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }

    this.answerSelected = true;
    setTimeout(() => {
      this.currentQuiz++;
      this.answerSelected = false;
    }, 1000);
  }

  showResult() {
    this.result = true;
  }
}
