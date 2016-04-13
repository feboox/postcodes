const infogeo = {
  templateUrl: 'app/components/infogeo/infogeo.html',
  controller: InfogeoController,
  controllerAs: 'vm',
  bindings: {
    geoData: '<'
  }
}


function InfogeoController() {
  'ngInject';
  const vm = this;

  vm.isInterestingData = isInterestingData;

  function isInterestingData(data) {
    return !angular.isObject(data);
  }
}

export { infogeo };
