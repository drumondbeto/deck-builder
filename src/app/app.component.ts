import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripleCardComponent } from './components/triple-card/triple-card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TripleCardComponent]
})
export class AppComponent {
  title = 'deck-builder';
}
