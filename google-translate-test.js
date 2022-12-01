const axios = require('axios');

let url =
  'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
  'en' +
  '&tl=' +
  'ne' +
  '&dt=t&q=' +
  encodeURI('raman karki');

const logNestedArray = (arr) => {
  if (!arr) return;

  if (typeof arr !== 'object') {
    console.log(arr);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    logNestedArray(arr[i]);
  }
};

async function translate() {
  const t0 = Date.now();
  const { data } = await axios(url);
  const t1 = Date.now();
  console.log('query time in ms:', t1 - t0, '\n');
  logNestedArray(data);
}

translate();

// references

// https://www.labnol.org/code/19909-google-translate-api
