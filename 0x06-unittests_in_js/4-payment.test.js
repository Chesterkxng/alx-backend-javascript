const sinon = require("sinon");
const sendPaymentRequestToApi = require('./4-payment');
const { describe, it } = require("mocha");
const Utils = require('./utils');
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
  it("should stub calculateNumber and spy on console.log", function() {

    const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);

    const consoleLogSpy = sinon.spy(console, "log");


    sendPaymentRequestToApi(100, 20);


    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWithExactly("SUM", 100, 20)).to.be.true;


    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly("The total is: 10")).to.be.true;


    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
