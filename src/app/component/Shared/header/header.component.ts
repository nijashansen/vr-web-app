import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public select(event) {
    const elements = document.getElementsByClassName('header-cell');
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('selected')) {
        elements[i].classList.remove('selected');
      }
    }
    if (event.target.classList.contains('cell-text')) {
      event.target.parentElement.classList.add('selected');
    }
    event.target.classList.add('selected');
  }

  public clearSelection(event) {
    const elements = document.getElementsByClassName('header-cell');
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('selected')) {
        elements[i].classList.remove('selected');
      }
    }
  }
}
