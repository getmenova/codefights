function letterFrequency(text) {
	/*global string*/ //for c9! 
	var count = {};
	string.split('').forEach(function(s) {
		count[s] ? count[s]++ : count[s] = 1;
	});
	return count;
}