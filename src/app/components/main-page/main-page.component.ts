import { CharacterService } from 'src/app/services/character.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor( private readonly router: Router,
    private characterService: CharacterService ) {}

  public getHomeClick(): void {
    void this.router.navigate(['home']);
  }

  ngOnInit(): void {
    this.characterService.getAllCharacters();
  }
}
