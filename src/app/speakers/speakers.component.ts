import { Component } from '@angular/core';
import { SpeakerInfoComponent } from '../speaker-info/speaker-info.component';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [SpeakerInfoComponent],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {



  constructor() { }
}
