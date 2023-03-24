import useSWR from "swr";
import { fetcher } from "../util/fetcher";

export function useNextLaunch() {
  const { isLoading, data, error } = useSWR(
    () => `https://api.spacexdata.com/v5/launches/next`,
    fetcher
  );

  return {
    isLoading,
    data,
    error,
  };
}

export function useLatestLaunch() {
  const { isLoading, data, error } = useSWR(
    () => `https://api.spacexdata.com/v5/launches/latest`,
    fetcher
  );

  return {
    isLoading,
    data,
    error,
  };
}
