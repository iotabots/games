import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import IERC721Enumerable from "../contracts/IERC721Enumerable.json";
import IERC721Metadata from "../contracts/IERC721Metadata.json";
import { ethers } from "ethers";
import axios from "axios";

export const StakeLilApes = () => {
  const { active, account, library, activate, deactivate, chainId } =
    useWeb3React();
  const [apes, setApes] = useState<any>([]);

  useEffect(() => {
    if (active && account) {
      loadApes("0x58dFC21e4e55536Cbb01dC5b1d3eA2260Bf0264a");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, account]);

  async function loadApes(addr: any) {
    //tokenOfOwnerByIndex
    const provider = new ethers.providers.Web3Provider(library.currentProvider);
    let contract_Enumerable = new ethers.Contract(
      addr,
      IERC721Enumerable.abi,
      provider
    );
    let contract_Metadata = new ethers.Contract(
      addr,
      IERC721Metadata.abi,
      provider
    );
    console.log("ape contract", contract_Enumerable);
    console.log("ape account", account);
    const data1 = await contract_Enumerable.supportsInterface("0x80ac58cd");
    console.log("ape data1", data1);
    const balance = await contract_Enumerable.balanceOf(account);
    let array = [];
    for (let index = 0; index < balance.toNumber(); index++) {
      const data = await contract_Enumerable.tokenOfOwnerByIndex(
        account,
        index
      );
      const token_index = data.toNumber();

      let metadata_url = await contract_Metadata.tokenURI(token_index);
      console.log("metadata_url:", metadata_url);
      metadata_url = metadata_url.replace("ipfs://", "");

      let res = await axios.get(
        "https://cloudflare-ipfs.com/ipfs/" + metadata_url + ".json"
      );
      let obj = {
        tokenId: token_index,
        url: res?.data?.image.replace(
          "ipfs://",
          "https://cloudflare-ipfs.com/ipfs/"
        ),
      };
      array.push(obj);
    }
    console.log("ape apes", apes);
    array = apes.concat(array);
    console.log("array");
    setApes(array);
  }
  return (
    <div>
      <Typography variant="h4">Stake Lil Apes</Typography>
      <Typography variant="h6">Coming soon...</Typography>
      <hr />
      <Grid container spacing={1}>
        {apes.length > 0 &&
          apes.map((a: any) => {
            return (
              <div key={a.tokenId}>
                <Card
                  sx={{
                    width: "200px",
                  }}
                >
                  <CardMedia
                    height="100px"
                    width={"100px"}
                    component="img"
                    image={a.url}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      LIL' APE #{a.tokenId}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })}
      </Grid>
    </div>
  );
};
