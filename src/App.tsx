import { Context } from './components/**states/Context';
import { Redux } from './components/**states/Redux';
import { XState } from './components/**states/XState';
import { Zustand } from './components/**states/Zustand';

export const App = () => {
  return (
    <div className="md:grid-cols-3 grid h-screen grid-cols-2 gap-1">
      <Zustand />
      <Redux />
      <XState />
      <Context />
    </div>
  );
};
