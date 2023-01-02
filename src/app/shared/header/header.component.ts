import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Output() backToHome = new EventEmitter<boolean>();

  constructor() { }

  public clickHome(): void{
    this.backToHome.emit();
  }

  ngOnInit(): void {
  }
}
