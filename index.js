#! /usr/bin/env node
console.time('time');
var cmd = require('./commands/commands'),
args = cmd.get(process.argv);

console.log(cmd.run(args));
console.timeEnd('time');