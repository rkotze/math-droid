var should = require('should');
var fibonacci = require('./fibonacci');

describe('Generate the fibonacci', function(){
	it('first 2 numbers', function(){
		fibonacci(2).should.be.eql([1,1]);
	});

	it('first 3 numbers', function(){
		fibonacci(3).should.be.eql([1,1,2]);
	});

	it('first 5 numbers', function(){
		fibonacci(5).should.be.eql([1,1,2,3,5]);
	});

	it('first 10 numbers', function(){
		fibonacci(10).should.be.eql([1,1,2,3,5,8,13,21,34,55]);
	});
});