var request = require('request');
const trie = require('./src/script');

const iniatedAt = new Date;
request.get('https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt', (error, response, body) => {
  const start = new Date();
  console.log('Word possibilities fetched in ',(start - iniatedAt)/1000, 'seconds. This time depends on internet speed.');

    if (!error && response.statusCode == 200) {
        const data = trie(body.replace( /\r/g, "" ).split("\n"));
        // data.getAnagrams(['cat', 'dog', 'museam', 'photosyntesis', 'typewriter']);
        data.getAnagrams(['collins']);
    } else {
      console.log(error)
    }

  console.log('Algorithm completed in ', (new Date - start)/1000, 'seconds');
});
