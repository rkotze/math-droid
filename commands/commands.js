var prime = require('../prime-numbers/prime-numbers');
var commands = {
	'isprime': function(value){
		if(prime.check(value))
			return 'Yes';

		return 'No';
	},
	
	'listnprimes': function(value){
		return prime.listFirst(value).join(', ');
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