var should = require('should');
var prime = require('./prime-numbers');

describe('Prime number', function(){
	it('should be 2', function(){
		(prime.check(2)).should.be.true();
	});

	it('should be 11', function(){
		(prime.check(11)).should.be.true();
	});

	it('should be 19', function(){
		(prime.check(19)).should.be.true();
	});

	it('should be 103', function(){
		(prime.check(103)).should.be.true();
	});

	it('should not be 4', function(){
		(prime.check(4)).should.be.false();
	});

	it('should not be 10', function(){
		(prime.check(10)).should.be.false();
	});

	it('should not be 100', function(){
		(prime.check(100)).should.be.false();
	});

});