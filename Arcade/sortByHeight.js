function sortByHeight(arr) {
	var trees = [];
	var sorted = [];
	arr.map((a, b, c) => {
		(a < 0) ? trees.push({
			a,
			b
		}): sorted.push(a);
	})
	sorted.sort((a, b) => {
		return a - b
	})
	trees.map((a, b, c) => {
		sorted.splice(a.b, 0, a.a)
	})
	return sorted
}
var a = [-1, 150, 190, 170, -1, -1, 160, 180];
sortByHeight(a)
//get off me nerd!
