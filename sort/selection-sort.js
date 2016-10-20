var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

module.exports.selectionSort = function(array) {
    for(var i = 0; i < array.length; i++){
        var minIndex = indexOfMinimum(array, i);
        if(minIndex > i){
            swap(array, i, minIndex);
        }
    }
};