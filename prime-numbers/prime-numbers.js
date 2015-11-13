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
	
	listFirst: function(nthPrimes){
		var primes = [],
		n = 2;
		while(nthPrimes > 0){
			if(this.check(n)){
				primes.push(n);
				nthPrimes--;
			}
			n++;
		}
		return primes;
	},

	listIn: function(maxValue){
		var primes = [],
		sieve = new Array(maxValue);

		for (var i = 1; i <= maxValue; i++) {
			sieve[i] = true;
		};

		for (var p = 2; p <= maxValue; p++) {
			if( sieve[p] ){
				primes.push(p);
				for (var t = p * 2; t <= maxValue; t += p) {
					sieve[t] = false;
				};
			}
		}

		return primes;
	}
};