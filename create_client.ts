import { createClient, generateKeyPairSigner } from "@solana/kit"

import { solanaDevnetRpc } from "@solana/kit-plugin-rpc";

import { signer } from "@solana/kit-plugin-signer";


const payer = await generateKeyPairSigner();

const client = createClient().use(signer(payer)).use(solanaDevnetRpc());


const slot = await client.rpc.getSlot().send();

console.log("current slot", slot);


