const express = require('express');
const axios = require('axios');
const app = express();

if (process.env.NOD_ENV !== 'production') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: './config.env' });
}
let key = process.env.key;

app.get('/:sectionName', async (req, res) => {
  try {
    const data = await axios.get(
      `https://content.guardianapis.com/search?api-key=${key}&q=${
        req.params.sectionName
      }&page=${
        req.query.page || 1
      }&show-fields=headline,standfirst,lang,publication,lastModified`
    );

    res.json(data.data.response);
  } catch (error) {
    res.json(error);
  }
});

const port = process.env.port || 8000;
app.listen(port, () => console.log('Server running successfully'));
