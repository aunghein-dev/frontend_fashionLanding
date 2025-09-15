
export function DisplayCurrency(currency: string) {
  return currency;
}

export function DisplayMoneyForCurrency(mmkInDefault: number, amount: number) {
  const value = mmkInDefault * amount;
  const rounded = Math.round(value);
  return new Intl.NumberFormat("en-US").format(rounded);
}

export function formatCurrency(amount: number, currency: string) {
  const symbols: Record<string, string> = {
    MMK: "Ks",
    USD: "$",
    THB: "฿",
  };

  const symbol = symbols[currency] || ""; 
  const rounded = Math.round(amount);

  const formatted = new Intl.NumberFormat("en-US").format(rounded);

  return `${symbol}${formatted}`;
}
