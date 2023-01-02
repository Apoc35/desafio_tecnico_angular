import { CharacterService } from 'src/app/services/character.service';
import { Subject, take, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public characters: Character[] = [];
  public pages: number = 0;

  public $results = this.characterService.$resultData.asObservable();
  private onDestroy = new Subject<void>();

  constructor(
    private characterService: CharacterService,
    private readonly router: Router
  ) {}

  /**
   * Aqui ele chama o service getAllCharacters que é responsável por fazer a requisição HTTP se comunicando com o repository.
   * Depois que o repository retorna um response, o service salva o valor no ReplaySubject.
   * Depois na variável $results é observado toda a mudança até que o componente seja destruido por causa da paginação.
   */
  ngOnInit(): void {

    this.$results.pipe(takeUntil(this.onDestroy)).subscribe((value) => {
      this.characters = value.results;
      this.pages = value.info.pages;
    })
  }

  /**
   * Chama o personagem clicado no backend e navega para a página de informações do personagem.
   * @param character Character clicado no HTML.
   */
  public getOneCharacter(character: Character) {
    this.characterService.getSingleCharacter(character.id).pipe(take(1)).subscribe((response) => {
      this.characterService.addCharacter(response);
    });
    void this.router.navigate(['character-info']);
  }

  /**
   * Método que é chamado quando o componente é destruído.
   * Ele envia um valor para os observadores que estejam assinando o objeto onDestroy e então finaliza o objeto,
   * impedindo que mais valores sejam enviados para os observadores. Isso é feito para garantir que não haja
   * nenhum comportamento indesejado depois que o componente é destruído.
   */
  public ngOnDestroy() {
    this.onDestroy.next(void 0);
    this.onDestroy.complete();
  }
}
