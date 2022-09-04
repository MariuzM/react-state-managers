import { useMachine } from '@xstate/react';

import { useStoreXState } from '../../states/useStoreXState';
import { Block } from '../Block';
import { Button } from '../Button';

export const XState = () => {
  const [state, send] = useMachine(useStoreXState);

  return (
    <Block title="XState">
      {state.context.count}
      <Button name="+" onClick={() => send('countPlusSet')} />
      <Button name="-" onClick={() => send('countMinusSet')} />
    </Block>
  );
};
