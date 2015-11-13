var prime = require('../prime-numbers/prime-numbers');
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
	}
};