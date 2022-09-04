import { useContext, useState } from 'react';

import { CountContext } from '../../states/useContext';
import { Block } from '../Block';
import { Button } from '../Button';

const Context = () => {
  const { count, countSet } = useContext(CountContext);

  return (
    <Block title="Context">
      <div>{count}</div>
      <Button name="+" onClick={() => countSet((s) => s + 1)} />
      <Button name="-" onClick={() => countSet((s) => s - 1)} />
    </Block>
  );
};

export const ContextApp = () => {
  const [count, countSet] = useState(0);

  return (
    <CountContext.Provider value={{ count, countSet }}>
      <Context />
    </CountContext.Provider>
  );
};
