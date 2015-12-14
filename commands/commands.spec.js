var should = require('should');
var commands = require('./commands');

describe('User commands', function(){
	it('return user commands', function(){
		commands.get(['no', 'no', 'user', 0]).should.be.eql(['user', 0]);
	});

	it('run user command `isprime` 2', function(){
		commands.run(['isprime', 2]).should.be.eql('Yes');
	});

	it('run user command `listnprimes` 3', function(){
		commands.run(['listnprimes', 3]).should.be.eql('2, 3, 5');
	});

	it('run user command `listprimesin` 13', function(){
		commands.run(['listprimesin', 13]).should.be.eql('2, 3, 5, 7, 11, 13');
	});

	it('run user command `fibsequence` 5', function(){
		commands.run(['fibsequence', 5]).should.be.eql('1, 1, 2, 3, 5');
	});

});