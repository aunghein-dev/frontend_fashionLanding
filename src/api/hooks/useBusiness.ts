import { useApiQuery } from "../useApiQuery";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface Business {
  businessId: number;
  businessLogo: string;
  businessName: string;
  businessNameShortForm: string;
  registeredBy: string;
  registeredAt: string;
  defaultCurrency: string;
  taxRate: number;
  showLogoOnInvoice: boolean;
  autoPrintAfterCheckout: boolean;
  invoiceFooterMessage: string;
  streets: string;
  township: string;
  city: string;
  phoneNum1: string;
  phoneNum2: string;
  thbRate: number;
  usdRate: number;
}

export function useBusiness() {
  const BIZID = import.meta.env.VITE_BUSINESS_ID;

  return useApiQuery<Business>(
    ["business", BIZID],
    `/public/mo/v1/business/${BIZID}`
  );
}
