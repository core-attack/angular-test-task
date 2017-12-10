export const UserService = function ($http) {
  const getRandomUserUrl = 'https://randomuser.me/api';
  return {
    getRandomUser: $http.get(getRandomUserUrl),
    getUser: seed => {
      return $http({
        url: getRandomUserUrl,
        method: 'GET',
        params: {seed}
      });
    }
  };
};
