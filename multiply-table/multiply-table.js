module.exports = function(){
	var table = {
		fieldSize: 1,
		padding: 1
	};
	var drawHeader = function(numberArr) {
		var colArr = [fieldPadding("")].concat(numberArr.map(function (value) {
			return "|" + fieldPadding(value);
		}));
		colArr.push("|\n");
		return colArr;
	},
	drawFields = function(numberArr) {
		var rowArr = [];
		for (var i = 0; i < numberArr.length; i++) {
			rowArr.push(fieldPadding(numberArr[i]));
			for (var j = 0; j < numberArr.length; j++) {
				rowArr.push("|" + fieldPadding(numberArr[i] * numberArr[j]));
			};
			rowArr.push("|\n");
		};
		return rowArr;
	},
	fieldSize = function(numberArr){
		var maxNum = Math.max.apply(null, numberArr);
		return Math.pow(maxNum, 2).toString().length;
	},
	fieldPadding = function(value){
		var diff = (table.fieldSize + table.padding) - value.toString().length;
		while(diff > 0){
			value += " ";
			diff--;
		}
		return value;
	};

	return {
		fieldSize: fieldSize,
		draw: function(numberArr) {
			table.fieldSize = fieldSize(numberArr);
			var header = drawHeader(numberArr).join(""),
			fields = drawFields(numberArr).join("");
			return header + fields;
		}
	};
}();