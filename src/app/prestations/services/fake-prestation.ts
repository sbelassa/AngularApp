import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/anums/state.enum';

export const fakePrestation: Prestation[] = [
  new Prestation(
    {
      id: 'wiwi',
      typePresta: 'coaching',
      client: 'capgemini',
      nbJour: 20,
      tjmHt: 800,
      state: State.CONFIRM,
    }),
    new Prestation(
    {
      id: 'tototo',
      typePresta: 'formation',
      client: 'cgi',
      nbJour: 10,
      tjmHt: 600,
      state: State.OPTION,
    }
  )
];
