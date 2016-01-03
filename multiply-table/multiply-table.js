module.exports = function(){
	var drawHeader = function(numberArr) {
		var colArr = ["  "].concat(numberArr.map(function (value) {
			return "|" + value + " "
		}));
		colArr.push("|\n");
		return colArr;
	},
	drawFields = function(numberArr, cb) {
		var rowArr = [];
		for (var i = 0; i < numberArr.length; i++) {
			rowArr.push(numberArr[i] + " ");
			for (var j = 0; j < numberArr.length; j++) {
				rowArr.push("|" + (numberArr[i] * numberArr[j]) + " ");
			};
			rowArr.push("|\n");
		};
		return rowArr;
	};

	return {
		draw: function(numberArr) {
			var header = drawHeader(numberArr).join(""),
			fields = drawFields(numberArr).join("");
			return header + fields;
		}
	};
}();