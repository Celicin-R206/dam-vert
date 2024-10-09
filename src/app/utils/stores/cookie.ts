import { create } from "zustand";
import { getCookie } from "@/lib/getCookie";
import { AuthUserType } from "../types/api";

type UserStore = {
  user: AuthUserType | null;
  loadUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  loadUser: () => {
    const data = getCookie("userCustomer");
    if (data) {
      try {
        set({ user: JSON.parse(data) });
      } catch (error) {
        console.error("Failed to decrypt cookie data", error);
      }
    }
  },
}));
