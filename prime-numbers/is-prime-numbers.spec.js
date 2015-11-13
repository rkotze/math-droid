var should = require('should');
var prime = require('./prime-numbers');

describe('Is prime number', function(){
	it('2', function(){
		(prime.check(2)).should.be.true();
	});

	it('11', function(){
		(prime.check(11)).should.be.true();
	});

	it('19', function(){
		(prime.check(19)).should.be.true();
	});

	it('103', function(){
		(prime.check(103)).should.be.true();
	});

	it('not 0', function(){
		(prime.check(0)).should.be.false();
	});

	it('not 1', function(){
		(prime.check(1)).should.be.false();
	});

	it('not 4', function(){
		(prime.check(4)).should.be.false();
	});

	it('not 10', function(){
		(prime.check(10)).should.be.false();
	});

	it('not 100', function(){
		(prime.check(100)).should.be.false();
	});

});