export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('userList', {
      url: '/',
      component: 'userList'
    })
    .state('userView', {
      url: '/user-view/:seed',
      component: 'userView'
    });
  $urlRouterProvider.otherwise('/');

  //  $stateProvider
  //  .state('app', {
  //    url: '/',
  //    component: 'app'
  //  });
}
