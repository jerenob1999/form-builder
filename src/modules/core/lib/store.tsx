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
  removeInput: (id: string | null) => void;
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
    removeInput: (id) => {
      set((state) => ({
        inputs: state.inputs.filter((input) => input.id !== id),
      }));
    },
  }))
);
