import { utils, getPublicKey } from "ethereum-cryptography/secp256k1";
import { toHex } from "ethereum-cryptography/utils";


const privateKey=utils.randomPrivateKey();
console.log("private key:", toHex(privateKey));

const publicKey=getPublicKey(privateKey);
console/log("public key:", toHex(publicKey));