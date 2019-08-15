var cron = require('node-cron');
var shell = require('shelljs');
//exceute every 1 min
cron.schedule('*/1 * * * *', function () {
    // console.log('running a task every minute');
    // shell.echo('hello world');
    // Run external tool synchronously
    if (shell.exec('pm2 restart all').code !== 0) {
        shell.echo('Error: pm2 failed to restart');
        shell.exit(1);
    }
});