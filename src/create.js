const append = require('./append');

module.exports = create = (possibleWords) => {
  /**
   * Creates a graph of accepted words for easy search
   * @returns trie graph
   */

  if(!Array.isArray(possibleWords)) {
    throw(`Expected parameter Array, received ${typeof possibleWords}`);
  }

  const trie = possibleWords.reduce((accumulator, item) => {
    item
      .toLowerCase()
      .split('')
      .reduce(append, accumulator);

    return accumulator;
  }, {});

  return trie;
};
