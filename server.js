const app = require('./app');

const PORT = process.env.NODE_ENV || 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

// pm2 start server.js -l logs.txt -i max
// pm2 reload server
