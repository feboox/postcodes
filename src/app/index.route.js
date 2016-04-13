export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      template: '<main postcode=""></main>'
    })
    .when('/:postcode', {
      template: params => `<main postcode="${params.postcode}"></main>`
    })
    .otherwise({
      redirectTo: '/'
    });
}
