var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginingOfArray = ["turkey","ham","chicken"];
var newaddElementToBeginingOfArray = ["beef",...addElementToBeginingOfArray];

var destructivelyAddElementToBeginningOfArray = ["pickles","cheese"];
destructivelyAddElementToBeginningOfArray.push("tomato");

var addElementToEndOfArray = ["towel","shirt"];
var newaddElementToEndOfArray = [addElementToEndOfArray,..."shoes"];

var destructivelyAddElementToEndOfArray = ["candy","ice cream"];
destructivelyAddElementToEndOfArray.unshift("cookies");

function accessElementInArray() {
  var time = ["seconds","minutes","hours"];
  return accessElementInArray[2];
}



