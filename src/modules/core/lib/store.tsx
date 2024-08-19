import { create } from "zustand";
import { Input } from "@/types/input";

type State = {
  selectedInput: Input | null;
};

type Action = {
  setSelectedInput: (input: State["selectedInput"]) => void;
};

export const useNewFormStore = create<State & Action>((set) => ({
  selectedInput: null,
  setSelectedInput: (input) => set(() => ({ selectedInput: input })),
}));
