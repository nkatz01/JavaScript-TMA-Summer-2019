(function lottotask5(){
var customerNumbers = [12,17,24,37,38,43];
var winningNumbers = [];
winningNumbers.push(12,17,24,37,38,43);
newLine="\n\n";
message = "This Week\'s Winning Numbers are:"+newLine+winningNumbers.toString()+newLine+"The Customer\'s Number are:"+newLine+customerNumbers.toString()+newLine+"Numbers Matched"+newLine;

function getCustomerNumber() {
	return customerNumbers;
}

function getWinningNumbers() {
	return winningNumbers;
}

function checkNumbers(customerNumbers, winningNumbers) {
	var counter = 0; 
	for (var i=0; i<customerNumbers.length; i++) {//for each entry in the customerNumbers array,
		for (var j=0; j<winningNumbers.length; j++) {//check if you can find a match in any of the entries in winningNumbers array.
		if (customerNumbers[i]==winningNumbers[j]){
			counter++;
		}
	}
}

	return counter;
}

function displayResult() {
	alert(message+checkNumbers(getCustomerNumber(), getWinningNumbers())); 
}

function init() {
	displayResult();

}

window.onload=init;
})();