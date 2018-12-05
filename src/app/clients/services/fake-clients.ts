import { Client } from 'src/app/shared/models/client';
import { ClientState } from 'src/app/shared/enums/client-state.enum';

export const fakeClients: Client[] = [
  new Client(
    {
      id: 'jhgjhgjh',
      nom: 'Junkook',
      email: 'junkookie@test.fr',
      state: ClientState.ACTIVE,
    }),
    new Client(
    {
      id: 'sjijdzjhj',
      nom: 'jimin',
      email: 'jimin@test.fr',
      state: ClientState.INACTIVE,
    }
  ),
  new Client(
  {
    id: 'lololo',
    nom: 'salma',
    email: 'salma@test.fr',
    state: ClientState.ACTIVE,
  }
)
];
