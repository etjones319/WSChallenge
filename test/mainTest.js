const ConfigJson = require('../js/config.js');
const assert = require('chai').assert;
const expect = require('chai').expect;
const getImageDiv = require('../js/main').getImageDiv;
const getNameDiv = require('../js/main').getNameDiv;
const getPriceDiv = require('../js/main').getPriceDiv;
const showSlides = require('../js/main').showSlides;
const getRightArrow = require('../js/main').getRightArrow;
const getLeftArrow = require('../js/main').getLeftArrow;

describe('main', function(){

  it('getImageDiv should return a <div>', function() {
    let result = getImageDiv(ConfigJson.groups[0]);
    expect(result.nodeName).eql('DIV');
  });

  it('getNameDiv should return a <div>', function() {
    let result = getNameDiv(ConfigJson.groups[0]);
    expect(result.nodeName).eql('DIV');
  });

  it('getPriceDiv should return a <div>', function() {
    let result = getPriceDiv(ConfigJson.groups[0]);
    expect(result.nodeName).eql('DIV');
  });

  it('getRightArrow should return a <a>', function() {
    let result = getRightArrow(ConfigJson.groups[0]);
    expect(result.nodeName).eql('A');
  });

  it('getLeftArrow should return a <a>', function() {
    let result = getLeftArrow(ConfigJson.groups[0]);
    expect(result.nodeName).eql('A');
  });

  it('showSlides should return undefined', function() {
    let result = showSlides(ConfigJson.groups[0]);
    assert.typeOf(result, 'undefined');
  });

});
