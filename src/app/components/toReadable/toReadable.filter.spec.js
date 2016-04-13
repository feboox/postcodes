describe('filter toReadable', () => {
  beforeEach(angular.mock.module('postcodes'));

  it('should return same input', inject(toReadableFilter => {
    const input = 'Test';
    const output = toReadableFilter(input);
    expect(output).toEqual('Test');
  }));

  it('should return the input without the underscores with first letter uppercase',
      inject(toReadableFilter => {
    const input = 'test_string';
    const output = toReadableFilter(input);
    expect(output).toEqual('Test String');
  }));
});
