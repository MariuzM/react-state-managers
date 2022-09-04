import { useStoreZustand } from '../../states/useStoreZustand';
import { Block } from '../Block';
import { Button } from '../Button';

export const ZustandApp = () => {
  const count = useStoreZustand((state) => state.count);
  const countPlusSet = useStoreZustand((state) => state.countPlusSet);
  const countMinusSet = useStoreZustand((state) => state.countMinusSet);

  return (
    <Block title="Zustand">
      {count}
      <Button name="+" onClick={countPlusSet} />
      <Button name="-" onClick={countMinusSet} />
    </Block>
  );
};
