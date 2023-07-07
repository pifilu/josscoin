const sha256 = require("crypto-js/sha256");

class Block {
    constructor(timestamp, transactions, previousHash = "") {
        this.timestam = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    mineBlock(difficulty) {
        while (
            this.hash.substring(0, diffuculty) !== Array(difficulty + 1).json("0")
        ) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("mining done :" + this.hash);
    }

    calculateHash() {
        return sha256(
            this.timestamp + 
            JSON.stringify(this.transactions) + 
            this.previousHash + 
            this.nonce
        ).toString();

    }
}

class Transactions {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

class Blockchine {
    constructor() {
        this.chain = [this.generateGenesisBlock()];
        this.difficulty =2;

        this.pendingTransactins = [];
        this.miningReward = 10;
    }

    generateGenesisBlock() {
        return new Block("2023-07-06", "GENESIS", "0000")
    }

    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }

    createTransaction(transactions) {
        this.pendingTransactions.push(transaction);
    }

    minePendingTransactions(minerAddress) {
        let block = new Block(Date.now(). this.pendingTransactins);
        black.mineBlock(this.difficulty);
        this.chain.push(block);
        this.pendingTransactins = [
            new Transaction(null, minerAddress, this.miningReward)
        ];
    }

    isBlockChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }

        }
        return true;
    }

    getBalanceOfAddress(address) {
        let balance = 0;
        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount;
                }
                if (trans.toAddress === address) {
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }

}

const jcoin = new Blockchine();
jcoin.createTransaction(new Transaction("address1", "address2", 100));
jcoin.createTransaction(new Transaction("address2", "address1", 50));

jcoin.minePendingTransactions('hasan-address');

console.log(jcoin.getBalanceOfAddress("hasan-address"));

jcoin.minePendingTransactions('hasan-address');
console.log(jcoin.getBalanceOfAddress("hasan-address"));
