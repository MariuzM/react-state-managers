import { ContextApp } from './components/**states/Context';
import { ReduxApp } from './components/**states/Redux';
import { XState } from './components/**states/XState';
import { ZustandApp } from './components/**states/Zustand';

export const App = () => {
  return (
    <div className="md:grid-cols-3 grid h-screen grid-cols-2 gap-1">
      <ZustandApp />
      <ReduxApp />
      <XState />
      <ContextApp />
    </div>
  );
};
