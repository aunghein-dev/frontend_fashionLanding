"use client";

import { useCurrency } from "@/api/hooks/useCurrency";
import Selector from "../typography/Selector";

export default function CurrencySelector() {
  const { currency, selectedBase, setBase } = useCurrency();

  const currencyKeys = Object.keys(currency.rates).filter((key) => key !== "USD");

  return (
    <Selector
      header="Currency"
      options={currencyKeys}
      value={selectedBase}
      onChange={setBase}
      className={{
        holderClass: "text-gray-white tracking-[0.2rem]",
      }}
    />
  );
}
