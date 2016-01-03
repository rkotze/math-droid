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

	it('should draw a 5 by 5 table', function(){
		table.draw([1,2,3,4,5]).should.eql(
			["   |1  |2  |3  |4  |5  |\n",
			"1  |1  |2  |3  |4  |5  |\n",
			"2  |2  |4  |6  |8  |10 |\n",
			"3  |3  |6  |9  |12 |15 |\n",
			"4  |4  |8  |12 |16 |20 |\n",
			"5  |5  |10 |15 |20 |25 |\n"].join(""));
	});
});