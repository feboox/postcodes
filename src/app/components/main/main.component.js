const main = {
  templateUrl: 'app/components/main/main.html',
  controller: MainController,
  controllerAs: 'vm',
  bindings: {
    postcode: '@',
    geoData: '<'
  }
}


function MainController($http, $scope) {
  'ngInject';

  const vm = this;
  vm.states = {
    WAITING:0,
    SEARCHING: 1,
    ERROR:2,
    DISPLAYING: 3
  };

  vm.state = vm.states.WAITING;
  vm.error = undefined;
  vm.searchComponent = undefined;

  vm.registerSearchComponent = registerSearchComponent;
  vm.onSearchCompleted = onSearchCompleted;
  vm.onSearchError = onSearchError;
  vm.onSearchStarted = onSearchStarted;

  function registerSearchComponent(searchComponent) {
      vm.searchComponent = searchComponent;
      if (!vm.postcode)
        return;
      vm.searchComponent.search(vm.postcode);
  }

  function onSearchCompleted(geoData) {
    setState(vm.states.DISPLAYING);
    vm.geoData = geoData;
    $scope.$apply();
  }

  function onSearchError(e) {
    vm.error = e.message;
    setState(vm.states.ERROR);
  }

  function onSearchStarted() {
    setState(vm.states.SEARCHING);
  }

  function setState(state) {
    if (state !== vm.states.ERROR)
      vm.error = undefined;
    vm.state = state;
  }

}

export { main };
