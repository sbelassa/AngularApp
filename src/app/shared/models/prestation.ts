import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../anums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJour = 0;
  tjmHt = 0;
  tauxTva = 20;
  state = State.OPTION;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  totalHT(): number {
    return this.tjmHt * this.tauxTva;
  }
  totalTTC(tva?: number): number {
    if (!tva) {
      return this.totalHT() * (1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHT();
    }
    return this.totalHT() * (1  + tva / 100);
  }
}