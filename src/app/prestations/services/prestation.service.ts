import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestation } from './fake-prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root' // on pourra changer ça pour le faire injecter dans un module à la place de 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection$: Observable<Prestation[]>;

  constructor(private afs: AngularFirestore) {
    //this.collection$ = fakePrestation; // ne pas faire _collection --> pour passer par un setter et ne pas affecter la variable directement
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      //map(data => data.map(doc => new Prestation(doc))); // better syntaxe for ES6
      map((data) => {
        return data.map((doc) => {
          return new Prestation(doc);
        });
      })
    );

  }

  // get collection
  public get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }
  // set Collection
  public set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }
  // add Item in Collection
public add(item: Prestation): void {

}
  // update Item In Collection
  public update(item: Prestation, state: State) {
    item.state = state;
    console.log(item.state);
  }
  // delete Item In Collection

  // getItemByID

}
