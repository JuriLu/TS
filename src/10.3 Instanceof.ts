//* Insstance of

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString);
  } else {
    console.log(new Date(date).toUTCString);
  }
}

class UserTest {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: UserTest | Company) {
  if (entity instanceof UserTest) {
     entity
  } else {
     entity
  }
}
