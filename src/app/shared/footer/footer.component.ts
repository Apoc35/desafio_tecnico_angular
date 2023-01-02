import { Character } from './../../models/character.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() character!: Character;

  constructor() { }

  ngOnInit(): void {
  }
}
