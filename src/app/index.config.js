export function config ($logProvider, toastrConfig, RestangularProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  RestangularProvider.setBaseUrl('http://api.postcodes.io');
  RestangularProvider.setResponseExtractor(function (data) {
    return data.result;
  });
}
