const config = require('./config');

permutations = (inputWords, trie) => {
  const words = [];

  const permute = (word, node, prefix = '') => {
        const wordIsEmpty = word.length === 0;
        const wordFound = words.includes(prefix);
        const endWordFound = node[config.END_WORD] === 1;

        // Get anagram
        if(wordIsEmpty && endWordFound && !wordFound) {
          words.push(prefix);
        }

        for(let i = 0, len = word.length; i < len; i++) {
          const letter = word[i];

        // Get sub-anagrams
        if(endWordFound && !words.includes(prefix)) {
          words.push(prefix);
        }

        // Recursion base
        if(node[letter]) {
          const remaining = word.substring(0, i) + word.substring(i + 1, len);
          permute(remaining, node[letter], prefix + letter, words);
        }
      }    
  };

  inputWords.forEach(word => {
    permute(word, trie);    
  });

  return words;

};

module.exports = permutations;
