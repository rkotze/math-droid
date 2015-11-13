var uiCommands = require('./ui');
module.exports = {
	get: function(args){
		return args.slice(2);
	},
	run: function(cmd){
		return uiCommands[cmd[0]](cmd[1]);
	}
};