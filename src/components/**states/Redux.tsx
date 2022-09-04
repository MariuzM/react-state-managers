import { Provider, useDispatch, useSelector } from 'react-redux';

import { countMinusSet, countPlusSet, countState, useStoreRedux } from '../../states/useStoreRedux';
import { Block } from '../Block';
import { Button } from '../Button';

export const Redux = () => {
  const count = useSelector(countState);
  const dispatch = useDispatch();

  return (
    <Block title="Redux">
      {count}
      <Button name="+" onClick={() => dispatch(countPlusSet(count + 1))} />
      <Button name="-" onClick={() => dispatch(countMinusSet(count - 1))} />
    </Block>
  );
};

export const ReduxApp = () => {
  return (
    <Provider store={useStoreRedux}>
      <Redux />
    </Provider>
  );
};
