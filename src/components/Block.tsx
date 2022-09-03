export const Block = (p: { title: string; children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-2 bg-red-300">
      <div className="top-5 absolute">{p.title}</div>
      <div className="flex flex-col items-center justify-center gap-2">{p.children}</div>
    </div>
  );
};
