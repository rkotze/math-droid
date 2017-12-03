var should = require('should'),
table = require('./multiply-table');

describe('Draw a custom table', function(){
	it('multiply the values in a 3 by 3 table', function(){
		table.draw([1,2,3]).should.eql(
			["  |1 |2 |3 |\n",
			"1 |1 |2 |3 |\n",
			"2 |2 |4 |6 |\n",
			"3 |3 |6 |9 |\n"].join(""));
	});

	it('multiply the values in a 5 by 5 table', function(){
		table.draw([1,2,3,4,5]).should.eql(
			["   |1  |2  |3  |4  |5  |\n",
			"1  |1  |2  |3  |4  |5  |\n",
			"2  |2  |4  |6  |8  |10 |\n",
			"3  |3  |6  |9  |12 |15 |\n",
			"4  |4  |8  |12 |16 |20 |\n",
			"5  |5  |10 |15 |20 |25 |\n"].join(""));
	});

	it('sum the values to draw a table 3 by 3', function(){
		table.sumDraw([1,2,3]).should.eql(
			["  |1 |2 |3 |\n",
			"1 |2 |3 |4 |\n",
			"2 |3 |4 |5 |\n",
			"3 |4 |5 |6 |\n"].join(""));
	});

});