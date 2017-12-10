export const userView = {
  template: require('./userView.html'),
  controller($routeParams, UserService) {
    const user = UserService.getUser($routeParams.seed);
    this.user = {
      name: user.results.name.title + ' ' + user.results.name.first + ' ' + user.results.name.last,
      email: user.results.email,
      phone: user.results.phone,
      dob: user.results.dob,
      picture: user.results.picture,
      seed: user.info.seed
    };
  }
};
