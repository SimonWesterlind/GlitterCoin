import { hashCode } from "./utils";
import * as crypto from 'crypto';

export class Block {
    private _blockHash: string;
    private _prevHash: string;
    private _transactions: Transaction[];
    public timeStamp = Date.now();
    constructor(prevHash: string, transactions: Transaction[]) {
        this._prevHash = prevHash;
        this._transactions = transactions;
        let contents = [hashCode(transactions.toString()), prevHash];
        this._blockHash = hashCode(contents.toString());
    }

    getBlockHash(): string {
        return this._blockHash;
    }


    public toString() {
        return this._blockHash.toString() + this._prevHash.toString() + this._transactions.map(toString);
    }
}

export class Transaction {
    from: string;
    to: string;
    what: string;
    constructor(from: string, to: string, what: string) {
        this.from = from;
        this.to = to;
        this.what = what;
    }

    public toString() {
        return this.from.toString() + this.to.toString() + this.what.toString();
    }
}

