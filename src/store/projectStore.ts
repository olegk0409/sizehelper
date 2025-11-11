
import { create } from 'zustand';
import { Human } from '../utils/types';

type Store = {
  selectedItem: Human;
  setSelectedItem: (item: Human) => void;
}

const defaultHuman: Human = {"gender": "Kids", "name": "213", "size": "XS", "values": {"A": "23", "B": "23", "C": "", "D": "", "E": ""}}

const useProjectStore = create<Store>((set) => ({
  selectedItem: defaultHuman,
  setSelectedItem: (selectedItem) => set({ selectedItem }),
}))

export default useProjectStore;