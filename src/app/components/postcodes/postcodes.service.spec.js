describe('service postcodesService', () => {
  beforeEach(angular.mock.module('postcodes'));

  it('should be registered', inject(postcodesService => {
    expect(postcodesService).not.toEqual(null);
  }));

describe('isPostcodeValid function', () => {

    it('should validate correct data', inject((postcodesService) => {
      const postcode = "CB3 0FA";
      const res = postcodesService.isPostcodeValid(postcode);
      const expected = true;
      expect(res).toBe(expected);
    }));

    it('should reject uncorrect data', inject((postcodesService) => {
      const postcode = "CB3 0f";
      const res = postcodesService.isPostcodeValid(postcode);
      const expected = false;
      expect(res).toBe(expected);
    }));
  });

});
