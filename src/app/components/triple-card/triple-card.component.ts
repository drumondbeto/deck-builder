import { Component,  Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-triple-card',
  templateUrl: './triple-card.component.html',
  styleUrls: ['./triple-card.component.css'],
  standalone: true
})
export class TripleCardComponent implements OnInit {
  @Input() imagePath: string = "https://static.wikia.nocookie.net/lil-alchemist/images/d/d5/Toy.png/";
  @Input() count: number = 1;
  constructor() { }


  ngOnInit() {
  }

}
