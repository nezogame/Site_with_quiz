import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'What\'s the capital of Latvia?',
      answer: [
        { option: 'Vilnus', correct: false },
        { option: 'Riga', correct: true },
        { option: 'Kyev', correct: false },
        { option: 'Sofia', correct: false }
      ]
    },
    {
      question: 'With who was interview about giving the voting rights from 16 y.o?',
      answer: [
        { option: 'Harijs Rokpelnis', correct: false },
        { option: 'Otto Tabuns', correct: false },
        { option: 'Dace Melbārde', correct: true },
        { option: 'Maksims Lodiņš', correct: false }
      ]
    },
    {
      question: 'Who is Amanda Leščinska?',
      answer: [
        { option: 'member of the palitical party \"Latvian Farmers\' Union\"', correct: true },
        { option: 'member of the palitical party \"the Greens and Farmers Union\"', correct: false },
        { option: 'member of the palitical party \"Progressive Alliance of Socialists and Democrats\"', correct: false },
        { option: 'member of the palitical party \"Party of European Socialists\"', correct: false }
      ]
    },
    {
      question: 'What\'s the capital of Latvia',
      answer: [
        { option: 'Vilnus', correct: false },
        { option: 'Riga', correct: true },
        { option: 'Kyev', correct: false },
        { option: 'Sofia', correct: false }
      ]
    },
    {
      question: 'What\'s the capital of Latvia',
      answer: [
        { option: 'Vilnus', correct: false },
        { option: 'Riga', correct: true },
        { option: 'Kyev', correct: false },
        { option: 'Sofia', correct: false }
      ]
    },
    {
      question: 'What\'s the capital of Latvia',
      answer: [
        { option: 'Vilnus', correct: false },
        { option: 'Riga', correct: true },
        { option: 'Kyev', correct: false },
        { option: 'Sofia', correct: false }
      ]
    }
  ]
  constructor() { }

  getQuizzes() {
    return this.quizzes;
  }
}
