
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
	}
};