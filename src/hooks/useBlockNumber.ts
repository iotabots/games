import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
//import useSWR from "swr";
import { ethers } from "ethers";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
export default function useBlockNumber() {
  const { library } = useWeb3React<Web3Provider>();
  const shouldFetch = !!library;

  //   return useSWR(
  //     shouldFetch ? ["BlockNumber"] : null,
  //     () => library?.getBlockNumber(),
  //     {
  //       refreshInterval: 10 * 1000,
  //     }
  //   );

  const queryFn = () => {
    if (!library) {
      return;
    }
    return library.getBlockNumber();
  };

  const query = useQuery({
    queryKey: ["BlockNumber"],
    queryFn,
  });

  return query;
}
