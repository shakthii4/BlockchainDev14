const Block = require('./block');
const { GENESIS_DATA } = require('./config');
describe('Block', () => {
  const timestamp = 'a-date';
  const lastHash = 'foo-lasthash';
  const hash = 'foo-hash';
  const data = ['blockchain', 'data'];
  const block = new Block({ timestamp, lastHash, hash, data });

  it('Has a timestamp,lastHash,Hash and Data Property', () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  describe('genesis()', () => {
    const genesisBlock = Block.genesis();
    console.log('genesisBlock', genesisBlock);

    it('return a Block instance', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });
    it('returns the genesis data', () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);

    });

  });

});