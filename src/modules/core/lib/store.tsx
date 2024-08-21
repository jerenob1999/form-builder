import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Input } from "@/types/input";

type State = {
  selectedInput: Input | null;
};

type Action = {
  setSelectedInput: (input: State["selectedInput"]) => void;
};

export const useNewFormStore = create<State & Action>()(
  devtools((set) => ({
    selectedInput: null,
    setSelectedInput: (input) => set(() => ({ selectedInput: input })),
  }))
);
