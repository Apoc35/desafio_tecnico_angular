import { takeUntil } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() pageNumber!: number;


  constructor( private characterService: CharacterService ) { }

  ngOnInit(): void {

  }

  createArray(): number[] {
    return Array.from(Array(this.pageNumber).keys()).map(i => i + 1);
  }
}
