import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'What is the primary purpose of politics in society?',
      answer: [
        {
          option: 'Enforcing rules', correct: false
        },
        { option: 'Making argument between people', correct: true },
        { option: 'Exercising power', correct: false },
        { option: 'Resolving conflicts', correct: false }
      ]
    },
    {
      question: 'In what type of groups can politics occur?',
      answer: [
        { option: 'Only in large countries', correct: false },
        { option: 'Only in small tribes', correct: false },
        { option: 'In any group', correct: true }
      ]
    },
    {
      question: 'Authoritarianism supports and upholds democracy',
      answer: [
        { option: 'True', correct: false },
        { option: 'False', correct: true }
      ]
    },
    {
      question: 'What defines authoritarianism?',
      answer: [
        { option: 'The system that upholds human rights and democracy', correct: false },
        { option: 'Wide separation of powers among branches', correct: false },
        { option: 'Strong central power and rejection democracy', correct: true },
        { option: 'Democratic voting encouraged among citizens', correct: false }
      ]
    },
    {
      question: 'What characterises a democracy?',
      answer: [
        { option: 'Laws, policies and leadership influenced by people', correct: true },
        { option: 'Laws and policies decided solely by the government', correct: false },
        { option: 'Decision-making by a selected group of elites', correct: false },
        { option: 'Leadership determined by military officials', correct: false }
      ]
    },
    {
      question: 'What is the primary function of political culture?',
      answer: [
        { option: 'To create chaos', correct: false },
        { option: 'To eliminate differences in political beliefs', correct: true },
        { option: 'To establish common attitudes', correct: false },
        { option: 'To exclude individuals', correct: false }
      ]
    },
    {
      question: 'What forms the foundation of political communities?',
      answer: [
        { option: 'Personal beliefs ', correct: true },
        { option: 'Global treaties', correct: false },
        { option: 'Government regulations', correct: false },
        { option: 'Economic policies', correct: false }
      ]
    },
    {
      question: 'The omnipotent government acts as the main guarantor of total ideological control. What political regime are we talking about?',
      answer: [
        { option: 'Totalitarian', correct: true },
        { option: 'Democratic', correct: false },
        { option: 'Authoritarian', correct: false }
      ]
    },
    {
      question: 'What is the attitude of the authorities towards the opposition in an authoritarian regime?',
      answer: [
        { option: 'Opposition is completely prohibited. Mass repressions are practiced.', correct: false },
        { option: 'Real political opposition is not allowed. If there is an opposition, it is completely controlled by the state.', correct: true },
        { option: 'The opposition has been given complete freedom of action.', correct: false }
      ]
    },
    {
      question: 'What form of resolving political and social conflicts is most typical for a democratic regime?',
      answer: [
        { option: 'Subordination', correct: false },
        { option: 'Suppression', correct: false },
        { option: 'Compromise', correct: true },
        { option: 'Avoidance', correct: false }
      ]
    },
    {
      question: 'Is there independent justice in a totalitarian state?',
      answer: [
        { option: 'Yes, the court is completely independent. One of the signs of a totalitarian regime is the separation of powers', correct: false },
        { option: 'No, justice is under complete state control', correct: true },
        {
          option: 'The court is independent only in civil proceedings', correct: false
        }
      ]
    },
    {
      question: 'Where does the world democracy originate from? ',
      answer: [
        { option: 'Italy', correct: false },
        { option: 'Spain', correct: false },
        { option: 'Greece ', correct: true },
        { option: 'USA', correct: false }
      ]
    },
    {
      question: 'How many countries today are run by some form of democratic government?',
      answer: [
        { option: 'About 60', correct: false },
        { option: '36', correct: false },
        { option: 'Over 100', correct: true }
      ]
    },
    {
      question: 'Democratic government typically are run by…',
      answer: [
        { option: 'A dictator', correct: false },
        { option: 'Military person', correct: false },
        { option: 'A president', correct: true },
        { option: 'Al Qaeda', correct: false }
      ]
    }
    ,
    {
      question: 'What type of democracy allows all citizen to vote directly on issue?',
      answer: [
        { option: 'Representative ', correct: false },
        { option: 'Direct', correct: true },
        { option: 'Indirect', correct: false },
        { option: 'Republic', correct: false }
      ]
    }
    ,
    {
      question: 'Which country is the world’s most populous democracy?',
      answer: [
        { option: 'Brazil', correct: false },
        { option: 'USA', correct: false },
        { option: 'Lithuania ', correct: false },
        { option: 'India', correct: true }
      ]
    }
    ,
    {
      question: 'Opportunities for citizen participation in politics:',
      answer: [
        { option: 'Referendums', correct: false },
        { option: 'Elections', correct: false },
        { option: 'Political parties', correct: false },
        { option: 'All of the above', correct: true }
      ]
    }
    ,
    {
      question: 'The main branches of government include…',
      answer: [
        { option: 'Legislative, executive and legal', correct: false },
        { option: 'Legislative, judicial and supervisory', correct: false },
        { option: 'Legislative, executive and judicial', correct: false },
        { option: 'Executive, political and economic', correct: true }
      ]
    }
    ,
    {
      question: 'The right to freedom of speech is expressed in',
      answer: [
        {
          option: 'Strict obedience to the law', correct: false
        },
        { option: 'Availability of media', correct: true },
        {
          option: 'Opportunities to freely choose a profession', correct: false
        },
        { option: 'Free movement', correct: false }
      ]
    }
    ,
    {
      question: 'The principles of democracy do not include:',
      answer: [
        { option: 'Power of the majority of the population', correct: false },
        { option: 'Strict obedience to the law', correct: false },
        { option: 'Equality of all citizens', correct: false },
        { option: 'Different scope of rights of citizens depending on their situation', correct: true }
      ]
    },
    {
      question: 'The division of power into branches does not allow:',
      answer: [
        {
          option: 'Establish justice in society', correct: false
        },
        { option: 'Concentrate power in one hand', correct: true },
        { option: 'Monitor the implementation of laws', correct: false },
        { option: 'Guarantee the right of all citizens to participate in politics', correct: false }
      ]
    },
    {
      question: 'Extremism under a democratic system...',
      answer: [
        {
          option: 'Is the basic principle', correct: false
        },
        { option: 'Allowed as part of ideologies', correct: false },
        { option: 'Is a measure of pluralism', correct: false },
        { option: 'Prohibited ', correct: true }
      ]
    },
    {
      question: 'Multi-party system presupposes...',
      answer: [
        {
          option: 'Presence of a two-party system', correct: false
        },
        { option: 'Prohibition of the activities of extremist parties', correct: false },
        { option: 'Presence of underground parties', correct: false },
        { option: 'Power struggle between parties', correct: true }
      ]
    },
    {
      question: 'The majority principle presupposes...',
      answer: [
        {
          option: 'The presence of a single mass party', correct: false
        },
        { option: 'Unanimous decision making', correct: false },
        { option: 'Coordination of various positions', correct: false },
        { option: 'Making decisions by majority', correct: true }
      ]
    },
    {
      question: 'Do not relate to the principles of the rule of law.',
      answer: [
        {
          option: 'Law supremacy', correct: false
        },
        { option: 'Feasibility', correct: false },
        { option: 'Protection of human rights', correct: false },
        { option: 'Protecting the rights of pets', correct: true }
      ]
    },
    {
      question: 'What kind of democracy does not exist?',
      answer: [
        { option: 'Straight', correct: false },
        { option: 'Representative', correct: false },
        { option: 'Russian', correct: false },
        { option: 'Hidden', correct: true }
      ]
    },
    {
      question: 'Elections are',
      answer: [
        {
          option: 'Method of forming a system of representative power', correct: true
        },
        {
          option: 'A way to have a good time', correct: false
        },
        { option: 'Circus', correct: false }
      ]
    },
    {
      question: 'Separation of powers is',
      answer: [
        {
          option: 'Separation of power into separate, competing branches', correct: true
        },
        { option: 'authoritarianism', correct: false },
        { option: 'totalitarianism', correct: false },
        { option: 'republics', correct: false }
      ]
    },
    {
      question: 'Political pluralism is characteristic of:',
      answer: [
        { option: 'democracy', correct: true },
        { option: 'authoritarianism', correct: false },
        { option: 'totalitarianism', correct: false },
        { option: 'republics', correct: false },
      ]
    },
    {
      question: 'The term does not apply to democracy:',
      answer: [
        { option: 'people as a source of power', correct: false },
        { option: 'publicity', correct: false },
        { option: 'pluralism', correct: false },
        { option: 'economic control', correct: true },
        { option: 'multi-party system', correct: false }
      ]
    }

  ]
  constructor() { }

  getQuizzes(): Quiz[] {
    return this.quizzes;
  }
}
