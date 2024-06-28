import { create } from "zustand";
import { generateId } from "../helpers";

interface Wish {
  id: string;
  title: string;
  createdAt: number;
}
interface WishesStore {
  wishes: Wish[];
  createWish: (title: string) => void;
  updateWish: (id: string, title: string) => void;
  removeWish: (id: string) => void;
}

export const useWishesStore = create<WishesStore>((set, get) => ({
  wishes: [{
    id: '1',
    title: "My very first wish",
    createdAt: Date.now(),
  }],
  createWish: (title) => {
    const { wishes } = get();
    const newWish = {
      id: generateId(),
      title,
      createdAt: Date.now(),
    };
    set({
      wishes: [newWish].concat(wishes),
    });
  },
  updateWish: (id: string, title: string) => {
    const { wishes } = get();
    set({
      wishes: wishes.map((wish) => ({
        ...wish,
        title: wish.id === id ? title : wish.title,
      })),
    });
  },
  removeWish: (id: string) => {
    const { wishes } = get();
    set({
      wishes: wishes.filter((wish) => wish.id !== id),
    });
  },
}));
