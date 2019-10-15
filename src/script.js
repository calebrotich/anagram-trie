const permutations = require('./permutations');
const create = require('./create');

module.exports = (possibleWords) => {
  if(!Array.isArray(possibleWords)) {
    throw(`Expected parameter Array, received ${typeof possibleWords}`);
  }

  // Integrate possible words from https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt
  const trie = create([...possibleWords]);

  return {
    /**
    * Get a list of all anagrams and sub-anagrams that can be made from the given words
    * @returns Array
    */
    getAnagrams(inputWords) {
      if(!Array.isArray(inputWords)) {
        throw(`Expected parameter Array, received ${typeof inputWords}`);
      }
      console.log(permutations(inputWords, trie));
    }
  };
};
