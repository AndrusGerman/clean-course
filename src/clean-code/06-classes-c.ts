(() => {
  // Aplicando el principio de responsabilidad unica
  // Priorizar la composicon frente a la herencia!

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
  }

  class User {
    private lastAccess: Date;
    public role: string;
    public email: string;
    constructor({ role, email }: UserProps) {
      this.role = role;
      this.email = email;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    WorkingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public WorkingDirectory: string;
    public lastOpenFolder: string;
    constructor({ WorkingDirectory, lastOpenFolder }: SettingsProps) {
      this.WorkingDirectory = WorkingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    WorkingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;
    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      WorkingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ role, email });
      this.settings = new Settings({ WorkingDirectory, lastOpenFolder });
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
