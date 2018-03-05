function centuryFromYear(yr) {
	var remainder = yr % 100;
	if (remainder == 0) return yr / 100;
	return (yr - remainder + 100) / 100;
}