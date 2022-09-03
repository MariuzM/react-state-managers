import { useStoreZustand } from '../../states/zustand/useStoreZustand';
import { Block } from '../Block';
import { Button } from '../Button';

export const Zustand = () => {
  const count = useStoreZustand((s) => s.count);
  const countPlusSet = useStoreZustand((s) => s.countPlusSet);
  const countMinusSet = useStoreZustand((s) => s.countMinusSet);

  return (
    <Block title="Zustand">
      {count}
      <Button name="+" onClick={countPlusSet} />
      <Button name="-" onClick={countMinusSet} />
    </Block>
  );
};
