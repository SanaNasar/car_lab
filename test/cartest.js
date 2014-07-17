// var expect = require('chai').expect,
//   Iterators = require('../src/iterators.js');

// describe('Iterators', function(){
//   describe('#max', function(){
//     var myArr;
//     beforeEach(function(){
//       myArr = [66,22,67, 34];
//     });
//     it('should return the maximum in an array', function(){
//       expect(Iterators.max(myArr)).to.equal(67);
//     })    
//     it('should return -Infinity for empty array', function(){
//       myArr = [];
//       expect(Iterators.max(myArr)).to.equal(-Infinity);
//     })
//   })
// })

var myCar = require("../src/car.js"),
  expect = require("chai").expect;

describe("myCar", function() {

  describe("Is myCar functioning", function() {
    it("should exist", function() {
      expect(myCar).to.exist;
    });
  });

  describe("#sale", function() {
    it("should be sold", function() {
      expect(myCar.currentOwner).to.equal('Sana');

    });
  });





});