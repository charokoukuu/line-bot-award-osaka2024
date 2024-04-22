const cron = require('node-cron');
export const CronMethods = () => {
    cron.schedule('* * * * * ', () => console.log('毎分実行'));
}