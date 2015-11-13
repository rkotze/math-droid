var should = require('should');
var prime = require('./prime-numbers');

describe('List prime numbers', function(){
	it('first 5', function(){
		prime.listFirst(5).should.be.eql([2,3,5,7,11]);
	});

	it('first 10', function(){
		prime.listFirst(10).should.be.eql([2,3,5,7,11,13,17,19,23,29]);
	});

});