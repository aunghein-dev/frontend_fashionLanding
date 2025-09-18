import { useApiQuery } from "../useApiQuery";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
export interface Item {
  itemId: number;
  itemImage: string;
  itemColorHex: string;
  itemQuantity: number;
  barcodeNo: string;
}

export interface WholesalePrice {
  id: number;
  minQuantity: number;
  price: number;
}

export interface Stock {
  groupId: number;
  groupImage: string;
  groupName: string;
  groupUnitPrice: number;
  groupOriginalPrice: number;
  releasedDate: string; 
  items: Item[];
  wholesalePrices: WholesalePrice[];
  isColorless: boolean;
}


export function useStocks() {

  const BIZID = import.meta.env.VITE_BUSINESS_ID;

  return useApiQuery<Stock[]>(
    ["stocks"], 
    `/public/mo/v1/stocks/${BIZID}`
  );
}



export function useSuggestedStocks(groupId: number) {
  const BIZID = import.meta.env.VITE_BUSINESS_ID;
  return useApiQuery<Stock[]>(
    ["suggested-stocks", groupId],
    `/public/mo/v1/suggested-stocks/${groupId}/${BIZID}`
  );
}