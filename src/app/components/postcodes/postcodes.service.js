export class PostcodesService {
  constructor ($log, Restangular) {
    'ngInject';

    this.$log = $log;
    this.Restangular = Restangular;
  }

  getGeoData(postcode) {
    const Postcodes = this.Restangular.service('postcodes');
    return Promise.all([
      Postcodes.one(postcode).get(),
      Postcodes.one(postcode).getList('nearest')
    ])
    .catch(e => {
        this.$log.log(e);
        const networkError = 'An error happened.';
        throw new Error(networkError);
    })
    .then(res => {
      //Should the first nearestData be removed?
      const [postcodeData, nearestData] = res.map(d => d.plain());
      return {postcodeData, nearestData};
    })
  }

  isPostcodeValid(postcode) {
    const postcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s\d[A-Z]{2}$/gi;
    return postcodeRegex.test(postcode);
  }
}
