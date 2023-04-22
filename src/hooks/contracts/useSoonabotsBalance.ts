// import useSWR from "swr";
import { useWeb3React } from "@web3-react/core";
import useKeepSWRDataLiveAsBlocksArrive from "../useKeepSWRDataLiveAsBlocksArrive";
import useBotsContract from "../useBotsContract";
import { useQuery, useMutation } from "@tanstack/react-query";
import { ethers } from "ethers";

export default function useSoonabotsBalance(
  address: string,
  tokenAddress: string
) {
  const contract = useBotsContract(tokenAddress);

  const query = useQuery({
    queryKey: ["SoonabotsBalance"],
    queryFn: () => {
      if (!contract) {
        return "Geht net";
      }

      return contract
        .balanceOf(address)
        .then((res) => ethers.utils.formatEther(res))
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
