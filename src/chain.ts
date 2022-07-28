import { Block, Transaction } from "./block";
import * as crypto from 'crypto';

export class Chain {
    public static instance = new Chain();

    chain: Block[];

    constructor() {
        this.chain = [new Block(null, [new Transaction("ether", "Simon", "999 Glitter Coin")])];
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(transaction: Transaction, adderPubKey: string) {
        // Do some validation.
        this.chain.push(new Block(this.getLastBlock().getBlockHash(), [transaction]))
    }
}

