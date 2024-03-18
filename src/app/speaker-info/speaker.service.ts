import { Injectable } from '@angular/core';
import { Speaker } from './speaker.model';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  speakers: Speaker[] = [
    {
      name: 'Dace Melbārde',
      information: `member of the European Parliament from Latvia since 2019. 
      Dace Melbārde is a Latvian cultural worker, politician, member of the European Parliament, 
      member of the association \"Jaună Unity\" (before the National Union).`
    },
    {
      name: 'Harijs Rokpelnis',
      information: `Harijs Rokpelnis is a member of the 14th Saeima, representing the Latvian Farmers' 
      Union and the Green and Farmers Union.`
    },
    {
      name: 'Otto Tabuns',
      information: `Otto Tabuns is the director of the Baltic Security Foundation.
      He instructs at the Riga Graduate School of Law and cohosts the Latvia Weekly 
      show on current political affairs. With background in international law and political 
      science, Tabuns has worked on foreign and defense policy for ten years between the 
      public service and European and American nongovernmental organizations.
      He is a co-editor of four books on regional security, most recently finishing 
      "Baltic Sea Security: regional and sectoral perspectives".`
    },
    {
      name: 'Eric Payerle',
      information: `University of Michigan
      Bachelor of Arts - BA, Public Policy Columbia | SIPA
      Master of International affairs, International Security Policy`
    },
    {
      name: 'Keegan Farrington',
      information: `University of Maine
      Bachelor's degree, Economics and Political Science.
      University of Maine
      Master of Arts - MA, Global Policy.
      Intern at Alhambra U.S. Chamber and Global Impact Initiative.`
    },
    {
      name: 'Natasha Wood',
      information: `MA in Law and Diplomacy Candidate, The Fletcher
      School. Baltic Security Foundation. The Fletcher School at
      Tufts University
      .`
    },
    {
      name: 'Kristine Grinberga',
      information: `Kristine Grinberga is an advisor of international security to the United Nations Youth delegate of Latvia
      Riga Stradina University (RSU)
      Hague University of Applied Sciences International
      Relations/European studies.`
    },
    {
      name: 'Amanda Cuhnova',
      information: `advisor of gender equality and inclusion to the United Nations
      Youth delegate of Latvia.
      student at the University of Latvia.`
    },
    {
      name: 'Amanda Lescinska',
      information: `Amanda Lescinska is a new member of the palitical party "Latvian Farmers' Union".`
    },
    {
      name: 'Alan Baguzin',
      information: `Creator of "Logus" Debate Club
      Debate Coach and player loth Youth Parliament MP VRSU International Relations student.`
    },
    {
      name: 'Maksims Lodins',
      information: `Member of the chairman of the Youth Saeima and 10 Youth Saeima deputy Riga, 
      Latvia Latvian, European and social democrat.`
    },
    {
      name: 'Anastasija Baranova',
      information: `RTU debate club`
    }

  ]
  constructor() { }

  getSpekers(): Speaker[] {
    return this.speakers
  }
}
