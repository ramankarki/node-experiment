const { Worker, isMainThread, workerData } = require('worker_threads');

if (isMainThread) {
  console.log(`Main thread is running in pid: ${process.pid}`);

  new Worker(__filename, {
    workerData: [7, 3, 3, 4567, 6, 432],
  });
  new Worker(__filename, {
    workerData: [3, 456, 76, 3, 23, 4567],
  });
} else {
  console.log(`Worker thread is running in pid: ${process.pid}`);
  console.log(workerData.sort((a, b) => a - b));
}
