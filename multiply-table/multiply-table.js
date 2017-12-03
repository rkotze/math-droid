module.exports = function(){
	function drawHeader(paddingCb, numberArr) {
		let colArr = [paddingCb("")].concat(numberArr.map(function (value) {
			return "|" + paddingCb(value);
		}));
		colArr.push("|\n");
		return colArr;
	}

	function drawFields(actionCb, paddingCb, numberArr) {
		var rowArr = [];
		for (var i = 0; i < numberArr.length; i++) {
			rowArr.push(paddingCb(numberArr[i]));
			for (var j = 0; j < numberArr.length; j++) {
				rowArr.push("|" + paddingCb(actionCb(numberArr[i], numberArr[j])));
			};
			rowArr.push("|\n");
		};
		return rowArr;
	}

	function maxFieldLength(actionCb, numberArr){
		var maxNum = Math.max.apply(null, numberArr);
		return actionCb(maxNum, maxNum).toString().length;
	};

	function multiply(a, b){
		return a * b;
	}

	function sum(a, b){
		return a + b;
	}

	function buildPadding(tableTypeCb, padding, numberArr) {
		const maxLength = maxFieldLength(tableTypeCb, numberArr) + padding;
		return function(value){
			var diff = maxLength - value.toString().length;
			while(diff > 0){
				value += " ";
				diff--;
			}
			return value;
		}
	}

	function buildTable(tableTypeCb){
		return function(numberArr) {
			const addPaddingFn = buildPadding(tableTypeCb, 1, numberArr);
			const header = drawHeader(addPaddingFn, numberArr).join("");
			const fields = drawFields(tableTypeCb, addPaddingFn, numberArr).join("");
			return header + fields;
		}
	}

	return {
		draw: buildTable(multiply),
		sumDraw: buildTable(sum)
	};
}();