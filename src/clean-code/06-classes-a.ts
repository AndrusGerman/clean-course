(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    private lastAccess: Date;
    public role: string;
    public email: string;
    constructor({ role, email, name, gender, birthdate }: UserProps) {
      super({ birthdate, gender, name });
      this.role = role;
      this.email = email;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    WorkingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    public WorkingDirectory: string;
    public lastOpenFolder: string;
    constructor({
      WorkingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.WorkingDirectory = WorkingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    WorkingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "andrusdiazaleman@gmail.com",
    role: "Admin",
    name: "Andrus diaz",
    gender: "M",
    birthdate: new Date("2001-05-15"),
  });

  console.log(userSettings);
})();
