import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import IERC721Enumerable from "../../../contracts/IERC721Enumerable.json";
import IERC721Metadata from "../../../contracts/IERC721Metadata.json";
import { ethers } from "ethers";
import axios from "axios";

export const StakeIOTAHeros = () => {
  const { active, account, library, activate, deactivate, chainId } =
    useWeb3React();
  const [apes, setApes] = useState<any>([]);

  useEffect(() => {
    if (active && account) {
      loadApes("0xA1C16Aa93572326bCE72b923c1e27A35166876c3");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, account]);

  async function loadApes(addr: any) {
    //tokenOfOwnerByIndex
    const provider = new ethers.providers.Web3Provider(library.provider);
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
    console.log("ape balance", balance.toNumber());
    let array = [];
    for (let index = 0; index < balance.toNumber(); index++) {
      const data = await contract_Enumerable.tokenOfOwnerByIndex(
        account,
        index
      );
      const token_index = data.toNumber();
      console.log("token_index:", token_index);

      let metadata_url = await contract_Metadata.tokenURI(token_index);
      console.log("metadata_url:", metadata_url);
      if (metadata_url) {
        metadata_url = metadata_url.replace("ipfs://", "");

        let res = await axios.get(
          "https://cloudflare-ipfs.com/ipfs/" + metadata_url
        );
        let obj = {
          tokenId: token_index,
          url: res?.data?.image.replace(
            "ipfs://",
            "https://cloudflare-ipfs.com/ipfs/"
          ),
        };
        array.push(obj);
      } else {
        console.log("no metadata_url");
        let obj = {
          tokenId: token_index,
          url: "https://api.iotaheroes.com/hero/image/" + token_index + ".png",
        };
        array.push(obj);
      }
    }
    console.log("ape apes", apes);
    array = apes.concat(array);
    console.log("array");
    setApes(array);
  }
  return (
    <div>
      <Typography variant="h4">Stake IOTA Heroes</Typography>
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
                      Hero #{a.tokenId}
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
