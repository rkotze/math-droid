var should = require('should');
var prime = require('./prime-numbers');

describe('List prime numbers', function(){
	it('first 5', function(){
		prime.list(5).should.be.eql([2,3,5,7,11]);
	});
});