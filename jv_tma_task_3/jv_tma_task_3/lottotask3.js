var customerNumbers = 12;
var match = false; 
var winningNumbers = []; 
winningNumbers.push(12,17,24,37,38,43);
newLine="\n\n";
winningMessage = newLine+"We have a match and a winner!"; 
losingMessage = newLine+"Sorry you are not a winner this week."
message = "This Week\'s Winning Numbers are:"+newLine+winningNumbers.toString()+newLine+"The Customer\'s Number is:"+newLine+customerNumbers;
if ((winningNumbers[0]==customerNumbers) || (winningNumbers[1]==customerNumbers) || (winningNumbers[2]==customerNumbers) || (winningNumbers[3]==customerNumbers) || (winningNumbers[4]==customerNumbers) || (winningNumbers[5]==customerNumbers)){ //if any of the entries in the array contain the customer number?
	match=true; 
}

else {
	match=false; 
}
if (match==true){
	message = message+winningMessage; 
}
else {
	message = message+losingMessage;
}
alert(message);