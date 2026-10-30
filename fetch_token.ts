import { address, createClient, fetchJsonParsedAccount } from "@solana/kit";
import { solanaRpc } from "@solana/kit-plugin-rpc";
import { generatedPayer } from "@solana/kit-plugin-signer";


const client = await createClient()
  .use(generatedPayer())
  .use(
    solanaRpc({
      rpcUrl: "https://api.mainnet.solana.com"
    })
  );


const tokenProgramAddress = address("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")

const accountInfo = await client.rpc
  .getAccountInfo(tokenProgramAddress, { encoding: "base64" }).send();

console.log(accountInfo)
const parsedAccount = await fetchJsonParsedAccount(client.rpc, tokenProgramAddress);
console.log(parsedAccount);
