module.exports = {
	check: function(prime){
		if(prime < 2)
			return false;

		var sqr = Math.floor(Math.sqrt(prime)),
		i = 2;
		while(i <= sqr){
			if(prime % i === 0)
				return false;

			i++;
		}

		return true;
	},
	
	list: function(primes){
		return [2,3,5,7,11];
	}
};