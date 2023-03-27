// get the result input element
var result = document.getElementById("result");

// function to get the calculator button inputs
function getResult(value) {
	// append the value to the input
	result.value += value;
}

// function to clear the result
function clearResult() {
	result.value = "";
}

// function to calculate the result
function calculateResult() {
	// evaluate the expression and set the result
	result.value = eval(result.value);
}
