export const Button = (p: { name: string; onClick: () => void }) => {
  return (
    <button className="w-14 px-4 py-2 font-bold text-white bg-blue-500 rounded" onClick={p.onClick}>
      {p.name}
    </button>
  );
};
