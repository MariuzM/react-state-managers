import { useStoreZustand } from '../../states/useStoreZustand';
import { Block } from '../Block';
import { Button } from '../Button';

export const ZustandApp = () => {
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
