import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private itemsCollection: AngularFirestoreCollection<Client>;
  private _collection$: Observable<Client[]>;
  public client$: BehaviorSubject<Client> = new BehaviorSubject(null); // il stock le dernier flux des info reçu

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Client>('clients');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map((data) => {
        this.client$.next(new Client(data[0]));
        return data.map((doc) => {
          return new Client(doc);
        });
      })
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

  getClient(id: string): Observable<Client> {
    return this.itemsCollection.doc<Client>(id).valueChanges();
  }

}
