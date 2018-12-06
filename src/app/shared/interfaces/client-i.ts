import { ClientState } from '../enums/client-state.enum';

export interface ClientI {
  id: string;
  nom: string;
  email: string;
  comment: string;
  state: ClientState;
}
