import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {
  @Input() title: string;
  @Input() relativNavPath: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onclick() {
  }

}
