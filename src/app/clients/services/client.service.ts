import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { fakeClients } from './fake-clients';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private itemsCollection: AngularFirestoreCollection<Client>;
  private _collection$: Observable<Client[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Client>('clients');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map(data => data.map(doc => new Client(doc))) //  syntaxe for ES6
    );
  }

  // get collection
  public get collection$(): Observable<Client[]> {
    return this._collection$;
  }
  // set Collection
  public set collection$(col: Observable<Client[]>) {
    this._collection$ = col;
  }
    // then is used in client.component
    update(item: Client, state?: ClientState): Promise<any> {
      const client  = {...item};
      if (state) {
        client.state = state;
      }
      return this.itemsCollection.doc(item.id).update(client).catch((e) => {
        console.log(e);
      });
    }

  // add Item in Collection
  add(item: Client): Promise<any> {
    const id = this.afs.createId();
    const client = { id, ...item };
    return this.itemsCollection.doc(id).set(client).catch((e) => {
      console.log(e);
    });
  }

  // then is used in
  public delete(item: Client): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
  }

  getPrestation(id: string): Observable<Client> {
    return this.itemsCollection.doc<Client>(id).valueChanges();
  }

}
