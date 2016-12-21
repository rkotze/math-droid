const Readable = require('stream').Readable;
const prime = require('../prime-numbers/prime-numbers');

class StreamMultipleTable extends Readable {
  constructor(numberArr, opt) {
    super(opt);
    this._maxFieldSize = this._fieldSize(numberArr);
    this._padding = 1;
    this._numberArr = numberArr;
    this.row = 0;
    this.headerCount = 0;
    this.field = 0;
  }

  _read() {
    // this._drawHeader();
    this._drawFields();

    //this.push(null);
  }

  _drawHeader() {
    if(this.headerCount === 0)
        this.push(this._fieldPadding(""));

    if(this.headerCount < this._numberArr.length){
      this.push(this._fieldPadding("|"+this._numberArr[this.headerCount]));
      this.headerCount++;
    }else{
      this.push("|\n");
    }

    // this.buffOut(this._fieldPadding(""));

    // for (var i = 0; i < this._numberArr.length; i++) {
    //   this.buffOut("|" + this._fieldPadding(this._numberArr[i]));
    // }

    // this.buffOut("|\n");
  }

  _drawFields() {
    if(this.row < this._numberArr.length){
      if(this.field === 0){
        this.push(this._fieldPadding(""+this._numberArr[this.row]));
      }

      if(this.field < this._numberArr.length){
        this.push("|" + this._fieldPadding(this._numberArr[this.row] * this._numberArr[this.field]))
        this.field++;
      }else{
        this.field = 0;
        this.row++;
        this.push("|\n");
      } 
    }else{
      this.push(null);
    }

    // for (var i = 0; i < this._numberArr.length; i++) {
    //   this.buffOut(this._fieldPadding(""+this._numberArr[i]));
    //   for (var j = 0; j < this._numberArr.length; j++) {
    //     this.buffOut("|" + this._fieldPadding(this._numberArr[i] * this._numberArr[j]));
    //   };
    //   this.buffOut("|\n");
    // };
  }

  buffOut(value) {
    this.push(value);
  }

  _fieldSize(numberArr) {
    var maxNum = Math.max.apply(null, numberArr);
    return Math.pow(maxNum, 2).toString().length;
  }

  _fieldPadding(value) {
    var diff = (this._maxFieldSize + this._padding) - value.toString().length;
    while(diff > 0){
      value += " ";
      diff--;
    }
    return value;
  }
}

var readPrimes = require('stream').Readable;
var readPrimes = readPrimes();

var c = 97;
readPrimes._read = function () {
    readPrimes.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) readPrimes.push(null);
};

// console.log(prime.listFirst(1000));
new StreamMultipleTable(prime.listFirst(1000)).pipe(process.stdout);