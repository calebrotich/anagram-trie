# Anagram Trie
Generates anagrams and sub-anagrams using tries. Supports large words.

### Problem definition
A list (dictionary) of possible English words can be downloaded at:
https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt.

Given this dictionary and a file containing a list of input words, write a
program that can generate all the words that can be formed using a subset of
characters from each input word.

For example, if the list of input words is:

`['cat', 'dog', 'museam', 'photosyntesis', 'typewriter']`

The output file will look like:
`['a','c','t','at','ta','act','cat','d', 'dog', ...]`

    
### How to test the script
1. Clone the repository `git clone https://github.com/calebrotich/anagram-trie.git` and cd into the project folder `cd anagram-trie` by default
2. Ensure that you have `node` installed to be able to use `npm` and to also run the application. Node can be downloaded from `https://nodejs.org/en/download/`
3. Install dependencies `npm install`
4. Run `node run` to run the application

`Note: Switch the inputs by modifying the array at run.js file`

### Technologies
1. JavaScript (Node.js, npm)

### credits
Script written in response to a challenge by `Ideas Come To Life`

### License
MIT - Feel free to use in part or whole