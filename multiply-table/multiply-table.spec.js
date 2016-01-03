var should = require('should'),
table = require('./multiply-table');

describe('Draw a multiplication table', function(){
	it('should draw a 3 by 3 table', function(){
	table.draw([1,2,3]).should.eql(
		["  |1 |2 |3 |\n",
		"1 |1 |2 |3 |\n",
		"2 |2 |4 |6 |\n",
		"3 |3 |6 |9 |\n"].join(""));
	});
});