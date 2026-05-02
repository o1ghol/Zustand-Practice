import { useStore } from '../stores/store';

export const BearCounter = () => {
  const bears = useStore((state) => state.bears);
  const increaseBear = useStore((state) => state.increaseBear);

  return (
    <div>
      <div>🐻: {bears}</div>
      <button type="button" onClick={() => increaseBear(1)}>+ 1</button>
    </div>
  );
};