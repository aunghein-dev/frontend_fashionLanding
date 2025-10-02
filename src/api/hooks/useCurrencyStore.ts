import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";

export interface CurrencyInterface {
  defaultCurrency: string; // MMK, THB, USD
  rates: Record<string, {
    baseInRate: number;    // how many base = 1 default
    baseInDefault: number; // how many default = 1 base
  }>;
}

interface CurrencyRateResponse {
  baseCurrency: string;
  baseInRate: number;
  baseInDefault: number;
  defaultCurrency: string;
}

const LOCAL_STORAGE_KEY = "currencysecrectkey-openwaremyanmar.com";
const API = import.meta.env.VITE_API;

export interface CurrencyStore {
  currency: CurrencyInterface;
  selectedBase: string;             // user-selected base currency
  setCurrency: (currency: CurrencyInterface) => void;
  setBase: (base: string) => void;
  clearCurrency: () => void;
  fetchCurrency: (bizId?: number) => Promise<void>;
  loading: boolean;
  isReady: boolean;
}
export const useCurrencyStore = create<CurrencyStore>()(
  persist(
    (set) => ({
      currency: { defaultCurrency: "MMK", rates: { MMK: { baseInRate: 1, baseInDefault: 1 } } },
      selectedBase: "MMK",
      loading: false,
      isReady: false,

      setCurrency: (currency) => set({ currency, isReady: true }),
      setBase: (base) => set((state) => ({
        selectedBase: state.currency.rates[base] ? base : state.selectedBase
      })),
      clearCurrency: () => set({
        currency: { defaultCurrency: "MMK", rates: { MMK: { baseInRate: 1, baseInDefault: 1 } } },
        selectedBase: "MMK",
        isReady: false
      }),

      fetchCurrency: async (bizId?: number) => {
        if (!bizId) return;
        set({ loading: true });
        try {
          const res = await axios.get(`${API}/public/mo/v1/rate/${bizId}`, { withCredentials: true });
          if (res.data?.length) {
            const rates: Record<string, { baseInRate: number; baseInDefault: number }> = {};
            res.data.forEach((r: CurrencyRateResponse) => {
              rates[r.baseCurrency] = { baseInRate: r.baseInRate, baseInDefault: r.baseInDefault };
            });
            set({
              currency: { defaultCurrency: res.data[0].defaultCurrency, rates },
              isReady: true
            });
          }
        } catch (err) {
          console.error("Currency fetch error:", err);
        } finally {
          set({ loading: false });
        }
      }
    }),
    {
      name: LOCAL_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      version: 1
    }
  )
);