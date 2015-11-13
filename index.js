#! /usr/bin/env node
var cmd = require('./commands/commands'),
args = cmd.get(process.argv);

console.log(cmd.run(args));