import { useSnapshot } from 'valtio';

import { valtioState } from '../../states/useStoreValtio';
import { Block } from '../Block';
import { Button } from '../Button';

export const ValtioApp = () => {
  const { count } = useSnapshot(valtioState);

  return (
    <Block title="Valtio">
      {count}
      <Button name="+" onClick={() => valtioState.count++} />
      <Button name="-" onClick={() => valtioState.count--} />
    </Block>
  );
};
