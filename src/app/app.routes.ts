import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { YouthPoliticalComponent } from './youth-political/youth-political.component';
import { FutureHeroesComponent } from './future-heroes/future-heroes.component';
import { MainGoalComponent } from './main-goal/main-goal.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { MediaComponent } from './media/media.component';
import { Voting16Component } from './voting16/voting16.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    { path: '', title: 'Youth Political', component: YouthPoliticalComponent },
    { path: 'future-heroes', title: 'Future Heroes', component: FutureHeroesComponent },
    { path: 'main-goal', title: 'Main Goal', component: MainGoalComponent },
    { path: 'workshops', title: 'Workshops', component: WorkshopsComponent },
    { path: 'speakers', title: 'Speakers', component: SpeakersComponent },
    { path: 'media', title: 'Media', component: MediaComponent },
    { path: 'voting16', title: 'Voting16', component: Voting16Component },
    { path: 'quiz', title: 'Quiz', component: QuizComponent },
    { path: 'contacts', title: 'Contacts', component: ContactsComponent }

];
