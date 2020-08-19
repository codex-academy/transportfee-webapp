const TransportFee = require("../transportFee");
const assert = require("assert");

describe("My transportFee function", function() {

	it("it should return R20 for the morning", function() {

		const transportFee = TransportFee();
		assert.equal("R20.00", transportFee.getPrice("morning"));


	});

	it("it should return R10 for the afternoon", function() {
		const transportFee = TransportFee();
		assert.equal("R10.00", transportFee.getPrice("afternoon"));

	});
	it("it should return free for the evening", function() {
		const transportFee = TransportFee();
		assert.equal("free", transportFee.getPrice("evening"));

	});

	it("it should keep count of how many time morning is selected", function() {
		const transportFee = TransportFee();
		
		transportFee.getPrice("morning");
		transportFee.getPrice("morning");
		transportFee.getPrice("morning");

		assert.equal(3, transportFee.getMorningCount());

	});

	it("it should return 2 for getMorningCount if getPrice called twice", function() {
		const transportFee = TransportFee();
		
		transportFee.getPrice("morning");
		transportFee.getPrice("morning");

		assert.equal(2, transportFee.getMorningCount());

	});
	it("it should return 2 for getMorningCount if getPrice called twice", function() {
		const transportFee = TransportFee();
		
		transportFee.getPrice("morning");
		transportFee.getPrice("morning");

		assert.equal(2, transportFee.getMorningCount());

	});

	it("it should be able to reset morningCount", function() {
		const transportFee = TransportFee();
		
		transportFee.getPrice("morning");
		transportFee.getPrice("morning");

		assert.equal(2, transportFee.getMorningCount());
		transportFee.resetMorningCount()
		assert.equal(0, transportFee.getMorningCount());

	});

});