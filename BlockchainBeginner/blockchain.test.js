const Blockchain = require('./blockchain');
const Block = require('./block');
const { genesis } = require('./block');


describe('Blockchain', () => {
  const blockchain = new Blockchain();

  it('contains a `chain` Array instance', () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });
  it('starts with the genesis block', () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());

  });
  it('adds a new Block to the chain', () => {
    const newData = 'foo-data';
    blockchain.addBlock({ data: newData });
    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);

  });
});