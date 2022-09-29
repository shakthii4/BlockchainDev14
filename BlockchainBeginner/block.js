const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

const CreateHash = (data) => {
  return data + '*';
}
class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    return new Block(GENESIS_DATA);
  }
  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    return new this({
      timestamp,
      lastHash,
      data,
      hash: cryptoHash(timestamp, lastHash, data)
    });

  }

  // const block1=new Block({timestamp:'foo-timestamp',lastHash:'foo-lasthash',hash:'foo-hash',data:'foo-data'});
  // console.log('block1',block1);

  // const block2=new Block({timestamp:'zoo-timestamp',lastHash:'zoo-lasthash',hash:'zoo-hash',data:'zoo-data'});
  // console.log('block2',block2);
}

module.exports = Block;