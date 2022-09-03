export const Block = (p: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-red-300">{p.children}</div>
  );
};
