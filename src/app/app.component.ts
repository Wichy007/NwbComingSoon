import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstQuestComponent, PokemonModule } from './pokermon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PokemonModule, FirstQuestComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  namesV2 = ["squirtle", "charmander", "bulbasaur", "pikachu"]

  selectedName = "A"

  onChoose(name: string): void {
    this.selectedName = name
  }
}
