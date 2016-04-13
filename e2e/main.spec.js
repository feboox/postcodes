'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('With no input the postcode field should be empty', function() {
    expect(page.postcode.getText()).toBe('');
  });

});
