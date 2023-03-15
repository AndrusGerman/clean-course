(() => {
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  const newPerson = new Person("Fernando", "M", new Date("2001-05-15"));

  console.log(newPerson);
})();
