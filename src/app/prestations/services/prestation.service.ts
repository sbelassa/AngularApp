import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestation } from './fake-prestation';
import { State } from 'src/app/shared/anums/state.enum';

@Injectable({
  providedIn: 'root' // on pourra changer ça pour le faire injecter dans un module à la place de 'root'
})
export class PrestationService {

  private _collection: Prestation[];
  constructor() {
    this.collection = fakePrestation; // ne pas faire _collection --> pour passer par un setter et ne pas affecter la variable directement
  }

  // get collection
  public get collection(): Prestation[] {
    return this._collection;
  }
  // set Collection
  public set collection(col: Prestation[]) {
    this._collection = col;
  }
  // add Item in Collection

  // update Item In Collection
  public update(item: Prestation, state: State) {
    item.state = state;
    console.log(item.state);
  }
  // delete Item In Collection

  // getItemByID

}
