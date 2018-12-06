import { ClientI } from '../interfaces/client-i';
import { ClientState } from '../enums/client-state.enum';

export class Client implements ClientI {
  id: string;
  nom: string;
  email: string;
  comment: string;
  state = ClientState.ACTIVE;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
