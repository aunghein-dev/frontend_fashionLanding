// useApiQuery.ts
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import apiClient from "./apiClient";

// Allow any serializable value in queryKey
export function useApiQuery<T>(
  key: readonly unknown[],
  url: string,
  options?: UseQueryOptions<T>
) {
  return useQuery<T>({
    queryKey: key,
    queryFn: async () => {
      const res = await apiClient.get(url);
      return res.data as T;
    },
    ...options,
  });
}
