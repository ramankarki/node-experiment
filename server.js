const cluster = require('cluster');
const os = require('os');
const app = require('./app');

const PORT = process.env.NODE_ENV || 5000;
const LOGICAL_CPUS = os.cpus().length;

if (cluster.isMaster) {
  console.log('Master thread is running...');
  for (let i = 0; i < LOGICAL_CPUS; i++) {
    cluster.fork();
    console.log(`${i + 1} Worker Thread running..`);
  }
} else {
  app.listen(PORT);
}
