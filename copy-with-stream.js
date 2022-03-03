const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('./video.mp4');
const writeStream = createWriteStream('./copy-video.mp4');

readStream.pipe(writeStream);
