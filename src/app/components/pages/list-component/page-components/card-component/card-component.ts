import { Component, input } from '@angular/core';
import { Spell } from '../../../../../model/spell';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.scss',
})
export class CardComponent {

  spell = input.required<Spell>();

}
