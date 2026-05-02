import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  bears: number;
};

type Action = {
  increaseBear: (by: number) => void;
};

//set関数を呼び出してstateの更新を行う
export const useStore = create<State & Action>()(
  devtools(
    immer((set) => ({
      //初期値
      bears: 0,
      increaseBear: (by) => set((state) => {state.bears += by}, false, 'increaseBear'),
    })),
  ),
);