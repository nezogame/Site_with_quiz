import { Component } from '@angular/core';
import { SpeakerInfoComponent } from '../speaker-info/speaker-info.component';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [SpeakerInfoComponent],
  templateUrl: './workshops.component.html',
  styleUrl: './workshops.component.css'
})
export class WorkshopsComponent {

  constructor() {
  }

  selectedElement: String = "thirdWorkshop";

  selectWorkshop(workshop: string) {
    this.selectedElement = workshop;
  }
}
