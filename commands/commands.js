var prime = require('../prime-numbers/prime-numbers');
var commands = {
	'isprime': function(value){
		if(prime.check(value))
			return 'Yes';

		return 'No';
	}
};

module.exports = {
	get: function(args){
		return args.slice(2);
	},
	run: function(cmd){
		return commands[cmd[0]](cmd[1]);
	}
};