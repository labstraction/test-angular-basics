import { Injectable } from '@angular/core';
import { Spell } from '../../model/spell';
import { SpellDetail } from '../../model/spell-detail';

@Injectable({
  providedIn: 'root',
})
export class SpellService {

  spellsURL = 'https://www.dnd5eapi.co/api/2014/spells'

  getAllSpells(): Promise<Spell[]> {
    return fetch(this.spellsURL)
    .then(resp => resp.json())
    .then(spells => spells.results);
  }

  getSpellByIndex(index: string): Promise<SpellDetail> {
    const selectedSpellUrl = this.spellsURL + '/' + index;
    return fetch(selectedSpellUrl)
    .then(resp => resp.json())
  }
  
}
