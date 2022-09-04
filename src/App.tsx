import { ContextApp } from './components/**states/Context';
import { JotaiApp } from './components/**states/Jotai';
import { ReduxApp } from './components/**states/Redux';
import { ValtioApp } from './components/**states/Valtio';
import { XState } from './components/**states/XState';
import { ZustandApp } from './components/**states/Zustand';

export const App = () => {
  return (
    <div className="md:grid-cols-3 grid h-screen grid-cols-2 gap-1">
      <ZustandApp />
      <ReduxApp />
      <XState />
      <JotaiApp />
      <ValtioApp />
      <ContextApp />
    </div>
  );
};
