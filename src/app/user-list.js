export const userList = {
  template: require('./userList.html'),
  controller(UserService) {
    this.users = [];
    const countUsers = 10;
    for (let i = 0; i < countUsers; i++) {
      const user = UserService.getRandomUser();
      this.users.push({
        name: user.results.name.title + ' ' + user.results.name.first + ' ' + user.results.name.last,
        email: user.results.email,
        phone: user.results.phone,
        dob: user.results.dob,
        picture: user.results.picture,
        seed: user.info.seed
      });
    }
  }
};
