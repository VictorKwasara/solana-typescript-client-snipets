import { createClient, generateKeyPairSigner, lamports } from "@solana/kit"
import { solanaRpc, rpcAirdrop } from "@solana/kit-plugin-rpc";
import { generatedPayer } from "@solana/kit-plugin-signer";


const client = await createClient()
  .use(generatedPayer())
  .use(
    solanaRpc({
      rpcUrl: "http://localhost:8899",
      rpcSubscriptionsUrl: "ws://localhost:8900"
    })
  )
  .use(rpcAirdrop());

const signer = await generateKeyPairSigner();
console.log(`Address: ${signer.address}`);

//Funding an address with sol automatically creates an account
await client.airdrop(signer.address, lamports(1_000_000_000n,));
const accountInfo = await client.rpc.getAccountInfo(signer.address).send();

console.log(accountInfo);
