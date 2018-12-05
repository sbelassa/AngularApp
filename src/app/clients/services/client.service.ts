import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { fakeClients } from './fake-clients';
import { ClientState } from 'src/app/shared/enums/client-state.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _collection: Client[];
  constructor() {
    this.collection = fakeClients;
  }

  // get collection
  public get collection(): Client[] {
    return this._collection;
  }
  // set Collection
  public set collection(col: Client[]) {
    this._collection = col;
  }
  // update Item In Collection
  public update(item: Client, state: ClientState) {
    item.state = state;
  }

  // add Item in Collection
  public add(item: Client): void {
    this.collection.push(new Client(item));
  }
}
