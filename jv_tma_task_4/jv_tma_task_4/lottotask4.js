var customerNumbers = 12;
var match = false; 
var winningNumbers = []; 
winningNumbers.push(12,17,24,37,38,43);
newLine="\n\n";
winningMessage = newLine+"We have a match and a winner!"; 
losingMessage = newLine+"Sorry you are not a winner this week."
message = "This Week\'s Winning Numbers are:"+newLine+winningNumbers.toString()+newLine+"The Customer\'s Number is:"+newLine+customerNumbers;

for (var i=0; i<winningNumbers.length &&!match; i++) {//The specifications say 'Use a For loop but then goes on to explain how to use an AND compound (3.) for the loop condition. The two are mutually exclusive. I've chosen to use a For loop instead of a While as this also coincides with the specification to nest an if condition inside the loop to check the customerNumbers against each entry in winningNumbers (4.).
	if (winningNumbers[i]==customerNumbers){ 
		match=true; 
		 
	}
}
if (match==true){
	message = message+winningMessage; 
}
else {//if no entry in array is equal to customerNumbers, match will have remained false as this is the value it was declared to have at the point of initilization
	message = message+losingMessage;
}
alert(message);