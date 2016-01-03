var prime = require('../prime-numbers/prime-numbers'),
fib = require('../fibonacci/fibonacci'),
table = require('../multiply-table/multiply-table');

module.exports = {
	'isprime': function(value){
		if(prime.check(value))
			return 'Yes';

		return 'No';
	},
	
	'listnprimes': function(value){
		return prime.listFirst(value).join(', ');
	},

	'listprimesin': function(max){
		return prime.listIn(max).join(', ');
	},

	'fibsequence': function(value) {
		return fib(value).join(', ');
	},

	'tablenprimes': function(value) {
		return table.draw(prime.listFirst(value));
	},

	'tablefibsequence': function(value){
		return table.draw(fib(value));
	}
};