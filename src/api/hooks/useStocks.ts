import { useApiQuery } from "../useApiQuery";

// Define the shape of your API response (based on your ApiResponse<T> wrapper)
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

export interface Stock {
  groupId: number;
  groupImage: string;
  groupName: string;
  groupUnitPrice: number;
  releasedDate: string;
  items: Item[];
}

// Hook for fetching stocks
export function useStocks() {
  return useApiQuery<Stock[]>(
    ["stocks"], 
    "/public/mo/v1/stock"
  );
}
