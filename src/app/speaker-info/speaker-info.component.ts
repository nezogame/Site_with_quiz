import { Component, OnInit } from '@angular/core';
import { Speaker } from './speaker.model';
import { SpeakerService } from './speaker.service';

@Component({
  selector: 'app-speaker-info',
  standalone: true,
  imports: [],
  templateUrl: './speaker-info.component.html',
  styleUrl: './speaker-info.component.css'
})
export class SpeakerInfoComponent implements OnInit {

  speakers: Speaker[] = []

  constructor(private speakerService: SpeakerService) {
  }

  ngOnInit(): void {
    this.speakers = this.speakerService.getSpekers();
  }
}
