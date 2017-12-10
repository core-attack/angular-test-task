import angular from 'angular';

import {UserService} from './app/services/user-service';
// import {hello} from './app/hello';
import {userList} from './app/user-list';
// import {userView} from './app/user-view';
import 'angular-ui-router';
import 'angular-route';
import routesConfig from './routes';
// import userRoutesConfig from './user-module-config';

import './index.scss';

export const app = 'app';
export const users = 'users';

//  angular
//  .module(app, ['ui.router'])
//  .config(routesConfig)
//  .component(app, hello);

angular
  .module(users, ['ui.router'])
  .config(routesConfig)
  .service('UserService', UserService);

angular
  .module(users)
  .component('userList', userList);
  // .component('userView', userView);
