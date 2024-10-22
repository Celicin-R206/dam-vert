import { create } from "zustand";
import { getCookie } from "@/lib/getCookie";
import { AuthUserType } from "../types/api";

type ClientStore = {
  client: AuthUserType | null;
  loadClient: () => void;
};
type PatnerStore = {
  partner: AuthUserType | null;
  loadPartner: () => void;
};

export const useUserStore = create<ClientStore>((set) => ({
  client: null,
  loadClient: () => {
    const data = getCookie("clientCustomer");
    if (data) {
      try {
        set({ client: JSON.parse(data) });
      } catch (error) {
        console.error("Failed to decrypt cookie data", error);
      }
    }
  },
}));

export const usePartnerStore = create<PatnerStore>((set) => ({
  partner: null,
  loadPartner: () => {
    const data = getCookie("partnerCustomer");
    if (data) {
      try {
        set({ partner: JSON.parse(data) });
      } catch (error) {
        console.error("Failed to decrypt cookie data", error);
      }
    }
  },
}));
