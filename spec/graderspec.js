var grader = require("../grader.js");

describe('letterGader', function () {

	it('takes a test score and returns the equivalent letter grade', function () {
		expect(grader.letterGrader(95)).toEqual("A");
		expect(grader.letterGrader(85)).toEqual("B");
		expect(grader.letterGrader(75.6)).toEqual("C");
		expect(grader.letterGrader(65)).toEqual("D");
})
});

describe ('average', function() {

	it('takes an array of test scores and returns the average score', function() {
		expect(grader.averageScore([99,98,97,96,95])).toEqual(97);
		expect(grader.averageScore([20,10,20,10,15])).toEqual(15);
	})
});

describe ('median', function() {

	it('takes an array of test scores and calculates the median score', function() {
		expect(grader.medianScore([99,98,97,96,95])).toEqual(97);
		expect(grader.medianScore([10,20,30,40])).toEqual(25);
	})
});

describe ('mode', function() {

	it('takes an array of test scores and calculates the median score', function() {
		expect(grader.medianScore([99,98,97,96,95])).toEqual(97);
		expect(grader.medianScore([10,20,30,40])).toEqual(25);
	})
});

