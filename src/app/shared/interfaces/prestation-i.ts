import { State } from '../enums/state.enum';

export interface PrestationI {
  id: string;
  typePresta: string;
  client: string;
  comment: string;
  nbJour: number;
  tjmHt: number;
  tauxTva: number;
  state: State;
  totalHT(): number;
  totalTTC(tva?: number): number;
}
