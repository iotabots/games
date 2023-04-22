import ERC20_ABI from "../contracts/Token.json";
//import type { ERC20 } from "../contracts/types";
import useContract from "./useContract";

export default function useTokenContract(tokenAddress?: string) {
  return useContract<ERC20>(tokenAddress, ERC20_ABI.abi);
}
