import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { BlockNumber } from "./BlockNumber";
import { Web3Provider } from "@ethersproject/providers";

export const Network = () => {
  const { library } = useWeb3React<Web3Provider>();

  return library && <BlockNumber />;
};
