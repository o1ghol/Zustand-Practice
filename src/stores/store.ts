import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type State = {
  bears: number;
};

type Action = {
  increaseBear: (by: number) => void;
};

//set関数を呼び出してstateの更新を行う
export const useStore = create<State & Action>()(
  devtools((set) => ({
    //初期値
    bears: 0,
    //stateの更新
    increaseBear: (by) => set((state) => ({ bears: state.bears + by }), false, 'increaseBear'),
  }))
);