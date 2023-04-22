import React, { createContext } from "react";

import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

interface IdentityContextProps {
  provider: ethers.providers.Provider | null;
  // web3: Web3Provider | null;
}

export const IdentityContext = createContext<IdentityContextProps>(
  {} as IdentityContextProps
);

interface Props {
  children: React.ReactNode;
}

export const IdentityProvider: React.FC<Props> = ({ children }) => {
  const [provider, setProvider] =
    React.useState<ethers.providers.Provider | null>(null);
  // const web3Context = useWeb3React<Web3Provider>();
  // const { library } = web3Context;

  // React.useEffect(() => {
  //   if (library) {
  //     console.log("Library present", web3Context);
  //   } else {
  //     console.log("Library not present", web3Context);
  //   }
  // }, [library]);

  const context = {
    // web3: !!web3Context ? web3Context : null,
    provider: provider,
  };

  return (
    <IdentityContext.Provider value={context}>
      {children}
    </IdentityContext.Provider>
  );
};
