var should = require('should');
var commands = require('./commands');

describe('User commands', function(){
	it('return user commands', function(){
		commands.get(['no', 'no', 'user', 0]).should.be.eql(['user', 0]);
	});

	it('run user command `isprime`', function(){
		commands.run(['isprime', 2]).should.be.eql('Yes');
	});

	it('run user command `listnprimes`', function(){
		commands.run(['listnprimes', 3]).should.be.eql('2, 3, 5');
	});

});