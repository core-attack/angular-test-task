export default userRoutesConfig;

/** @ngInject */
function userRoutesConfig($routeProvider) {
  $routeProvider
    .when('/users', {
      templateUrl: '/../src/app/userList.html'
    })
    .when('/user-view/:seed', {
      templateUrl: 'app/userView.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}
