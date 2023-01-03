import { take } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() pageNumber!: number;

  public currentPage: number = 1;

  constructor( private characterService: CharacterService ) {}

  /**
   * Retorna os personagens da página clicada.
   * @param page Número da página.
   */
  public changeCharacter(page: number) {
    this.characterService.getPages(page)
      .pipe(take(1))
      .subscribe(response => {
        this.characterService.addResults(response);
        this.currentPage = page;
    });
  }

  /**
   * Lógica para a criação da paginação dinamicamente.
   * @returns
   */
  createArray(): number[] {
    return Array.from(Array(this.pageNumber).keys()).map(i => i + 1);
  }
}
