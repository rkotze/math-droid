var should = require('should');
var prime = require('./prime-numbers');

describe('List prime numbers', function(){
	it('first 5', function(){
		var first5 = prime.listFirst(5);
		first5.should.be.eql([2,3,5,7,11]);
		first5.length.should.be.eql(5);
	});

	it('first 10', function(){
		var first10 = prime.listFirst(10);
		first10.should.be.eql([2,3,5,7,11,13,17,19,23,29]);
		first10.length.should.be.eql(10);
	});

	it('less than 13', function(){
		var lessThan13 = prime.listIn(13);
		lessThan13.should.be.eql([2,3,5,7,11,13]);
		lessThan13.length.should.be.eql(6);
	});

	it('less than 30', function(){
		var lessThan30 = prime.listIn(30)
		lessThan30.should.be.eql([2,3,5,7,11,13,17,19,23,29]);
		lessThan30.length.should.be.eql(10);
	});

});