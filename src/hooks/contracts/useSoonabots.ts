// import useSWR from "swr";
import { useWeb3React } from "@web3-react/core";
import useKeepSWRDataLiveAsBlocksArrive from "../useKeepSWRDataLiveAsBlocksArrive";
import useBotsContract from "../useBotsContract";
import { useQuery, useMutation } from "@tanstack/react-query";
import { ethers } from "ethers";

export default function useSoonabots(address: string, tokenAddress: string) {
  const contract = useBotsContract(tokenAddress);

  const query = useQuery({
    queryKey: ["Soonabots"],
    queryFn: () => {
      if (!contract) {
        return;
      }

      return contract
        .walletOfOwner(address)
        .then((res) => res.map((x) => x.toNumber()))
        .catch((error: any) => {
          return {
            error,
          };
        });
    },
  });

  const mutation = useMutation({
    mutationFn: () => query.refetch(),
  });

  useKeepSWRDataLiveAsBlocksArrive(mutation.mutateAsync);

  return query;
}
