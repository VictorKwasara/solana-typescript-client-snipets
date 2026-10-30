import { address, createClient } from "@solana/kit"
import { solanaRpc } from "@solana/kit-plugin-rpc"
import { generatedPayer } from "@solana/kit-plugin-signer";
import { fetchMint } from "@solana-program/token";

const client = await createClient()
  .use(generatedPayer())
  .use(
    solanaRpc({
      rpcUrl: "https://api.mainnet.solana.com"
    })
  );

const mintAddress = address("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");

const accountInfo = await client.rpc.getAccountInfo(mintAddress, { encoding: "base64" }).send();

console.log(accountInfo);


const mint = await fetchMint(client.rpc, mintAddress);

console.log(mint);


