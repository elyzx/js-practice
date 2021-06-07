// TODO: write the methods getAge, addFriend and getRandomFriend

const chuck = {
  firstName: 'Chuck',
  lastName: 'Norris',
  birthDate: new Date('1940-03-10'),
  friends: [
    'Pablo',
    'Julie',
    'Yanis'
  ],
  displayInfo() {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and I have ${this.friends.length} friends.`
    );
  },
  getAge() {
    let currentTime = new Date ()
    let ageInMilli = currentTime - this.birthDate
    let ageInYears = ageInMilli / 31536000000 
    return ageInYears
  },
  addFriend(name) {
    this.friends.push(name)
  },
  getRandomFriend() {
    let index = Math.floor(Math.random() * this.friends.length)
    return this.friends[index]
  }
};

chuck.displayInfo();

console.log('getAge', chuck.getAge()); // Should return 81 if you are in 2021

chuck.addFriend('Jorge');
console.log('getRandomFriend', chuck.getRandomFriend());
chuck.addFriend('Helena');
console.log('getRandomFriend', chuck.getRandomFriend());
chuck.addFriend('Manish');
console.log('getRandomFriend', chuck.getRandomFriend());

chuck.displayInfo();
