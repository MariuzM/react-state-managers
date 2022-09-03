import { Zustand } from './components/**states/Zustand';

export const App = () => {
  return (
    <div className="md:grid-cols-3 grid h-screen grid-cols-2 gap-1">
      <Zustand />
      <Zustand />
      <Zustand />
      <Zustand />
      <Zustand />
    </div>
  );
};
