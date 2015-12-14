var fibSequence = function(number) {
	fibArray = [],
	start = 1;

	var fib = function(num) {
		if(num < 2) 
			return num;

		return fib(num - 1) + fib(num - 2);
	};
	
	while(start <= number){
		fibArray.push(fib(start));
		start++;
	}

	return fibArray;
};

module.exports = fibSequence;