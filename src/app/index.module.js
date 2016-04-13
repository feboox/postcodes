import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { main } from '../app/components/main/main.component';
import { search } from '../app/components/search/search.component';
import { infogeo } from '../app/components/infogeo/infogeo.component';
import { toReadable } from '../app/components/toReadable/toReadable.filter';
import { PostcodesService } from '../app/components/postcodes/postcodes.service';

angular.module('postcodes', ['ngAnimate', 'ngMessages', 'ngAria', 'restangular', 'ngRoute', 'ui.bootstrap', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('postcodesService', PostcodesService)
  .component('main', main)
  .component('search', search)
  .component('infogeo', infogeo)
  .filter('toReadable', toReadable)
