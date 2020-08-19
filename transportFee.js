module.exports = function() {

	let morningCounter = 0;

	function getPrice(shift) {
		if (shift === "morning") {
			morningCounter++;
			return "R20.00";
		} else if (shift === "afternoon") {
			return "R10.00";
		} else {
			return "free";
		}
	}

	function getMorningCount() {
		return morningCounter;
	}

	function resetMorningCount() {
		morningCounter = 0;
	}

	return {
		getPrice,
		getMorningCount,
		resetMorningCount
	}
}
