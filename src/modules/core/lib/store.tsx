import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Input } from "@/types/input";

type State = {
  selectedInput: Input | null;
  inputs: Input[];
};

type Action = {
  setSelectedInput: (input: State["selectedInput"]) => void;
  setNewInput: (input: Input) => void;
};

export const useNewFormStore = create<State & Action>()(
  devtools((set) => ({
    inputs: [],
    selectedInput: null,
    setSelectedInput: (input) => set(() => ({ selectedInput: input })),
    setNewInput: (input) => {
      set((state) => ({
        ...state,
        inputs: [...state.inputs, input],
      }));
    },
  }))
);
