import { Provider, useAtom } from 'jotai';

import { countAtom } from '../../states/useStoreJotai';
import { Block } from '../Block';
import { Button } from '../Button';

export const Jotai = () => {
  const [count, countSet] = useAtom(countAtom);

  return (
    <Block title="Jotai">
      {count}
      <Button name="+" onClick={() => countSet((count) => count + 1)} />
      <Button name="-" onClick={() => countSet((count) => count - 1)} />
    </Block>
  );
};

export const JotaiApp = () => {
  return (
    <Provider>
      <Jotai />
    </Provider>
  );
};
