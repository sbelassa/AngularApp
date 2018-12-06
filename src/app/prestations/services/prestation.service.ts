import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';

@Injectable({
  providedIn: 'root' // on pourra changer ça pour le faire injecter dans un module à la place de 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection$: Observable<Prestation[]>;

  constructor(private afs: AngularFirestore, private http: HttpClient) {
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
      /*this._collection$ = this.http.get(`${URL_API}/prestations`).pipe(
        map(data => data.map(doc => new Prestation(doc))));*/
  }

  // get collection
  public get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }
  // set Collection
  public set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  /**
   * new methods to do the job with a DB
   * */

  // add presta
  // a promise that it's 'then'=responce is added in add-prestation component
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post(`${URL_API}/prestations/add`, item);
  }

  // then is used in prestation.component
  update(item: Prestation, state?: State): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch(`${URL_API}/prestationupdate/+${item.id}`, presta);
  }

  // then is used in
  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`${URL_API}/prestations/delete/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`${URL_API}/prestations/${id}`);
  }

}
