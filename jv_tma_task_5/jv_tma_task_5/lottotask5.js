(function lottotask5(){
var customerNumbers = 12;
var winningNumbers = [];
winningNumbers.push(12,17,24,37,38,43);
newLine="\n\n";
winningMessage = newLine+"We have a match and a winner!";
losingMessage = newLine+"Sorry you are not a winner this week."
message = "This Week\'s Winning Numbers are:"+newLine+winningNumbers.toString()+newLine+"The Customer\'s Number is:"+newLine+customerNumbers;

function getCustomerNumber() {
	return customerNumbers;
}

function getWinningNumbers() {
	return winningNumbers;
}

function checkNumbers(customerNumbers, winningNumbers) {
	var match = false;
	for (var i=0; i<winningNumbers.length; i++) {
	if (winningNumbers[i]==customerNumbers){
		match=true;
		break;
	}
}
if (match==true){
	message = message+winningMessage;
}
else {
	message = message+losingMessage;
}
	return message;
}

function displayResult() {
	alert(checkNumbers(getCustomerNumber(), getWinningNumbers())); //getCustomerNumber and getWinningNumbers pass global CN and WN array to checkNumbers function, respectively. checkNumbers compares CN to each entry in array and depending on the results, appends global winning or losing message to 'base message'. checkNumbers then returns this results to displayResult, whose task is to display the message to the user.

}

function init() {
	displayResult();

}

window.onload=init;
})();