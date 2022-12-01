const writeStream = require('fs').createWriteStream('./file.txt');

process.stdin.pipe(writeStream);
process.stdin.on('data', (data) => {
  console.log(data.toString().replace(/[a-z]/g, '-'));
});
