import { create } from "zustand";

interface LatLng {
  lat: number;
  lng: number;
}

interface CoordonnerState {
  coordonner: LatLng | null;
  setCoordonner: (coords: LatLng) => void;
}

export const useCoordonnerStore = create<CoordonnerState>((set) => ({
  coordonner: null,
  setCoordonner: (coords) => set({ coordonner: coords }),
}));
