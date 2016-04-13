const search = {
  templateUrl: 'app/components/search/search.html',
  controller: SearchController,
  controllerAs: 'vm',
  require: {
    main: '^main'
  },
  bindings: {
    postcode: '<'
  }
}


function SearchController(postcodesService, $log, $location) {
  'ngInject'

  const vm = this;

  vm.search = search;
  vm.submit = submit;
  const validationError = new Error('Invalid postcode.');

  vm.$onInit = () => vm.main.registerSearchComponent(vm);

  function submit(postcode) {
    $location.path(postcode);
  }

  function search(postcode) {
    if (!postcodesService.isPostcodeValid(postcode)){
      vm.main.onSearchError(validationError);
      return;
    }
    vm.main.onSearchStarted();
    postcodesService.getGeoData(postcode)
      .then(geoData => vm.main.onSearchCompleted(geoData))
      .catch(e => vm.main.onSearchError(e));
  }
}

export { search };
