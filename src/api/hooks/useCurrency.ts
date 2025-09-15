
import { useEffect, useCallback } from "react";
import { useCurrencyStore } from "./useCurrencyStore";

const CURRENCY_SYMBOLS: Record<string, string> = {
  MMK: "Ks",
  //USD: "$",
  THB: "฿",
};

export function useCurrency() {
  const { currency, selectedBase, setBase, fetchCurrency, loading, isReady } = useCurrencyStore();
  const  bizId  = 1;

  useEffect(() => {
    if (bizId) fetchCurrency(bizId);
  }, [bizId, fetchCurrency]);

  const convert = useCallback((amount: number, base?: string) => {
    const from = base ?? selectedBase;
    return amount * (currency.rates?.[from]?.baseInDefault ?? 1);
  }, [currency.rates, selectedBase]);

  const formatMoney = useCallback((amount: number, base?: string, showSymbol = true) => {
    const key = base ?? selectedBase;
    const symbol = showSymbol ? CURRENCY_SYMBOLS[key] ?? "" : "";
    return `${symbol} ${new Intl.NumberFormat("en-US").format(Math.round(amount))}`;
  }, [selectedBase]);

  const display = useCallback((amount: number, base?: string) => {
    return formatMoney(convert(amount, base), base);
  }, [convert, formatMoney]);

  return { currency, selectedBase, setBase, convert, formatMoney, display, loading, isReady };
}