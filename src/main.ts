import { Block, Transaction } from "./block";
import { Chain } from "./chain";

function main() {

    console.log("Hash of 1: " + Chain.instance.getLastBlock().getBlockHash());
    Chain.instance.addBlock(new Transaction("Simon", "Linus", "333 Glitter Coin"), "ma pub key");
    console.log("Hash of 2: " + Chain.instance.getLastBlock().getBlockHash());
    Chain.instance.addBlock(new Transaction("Simon", "Felix", "222 Glitter Coin"), "ma pub key");
    console.log("Hash of 3: " + Chain.instance.getLastBlock().getBlockHash());
}

main();