namespace BuilderSolution {
  // Option 1
  class User {
    public name: string = "";
    public username: string = "";
    public password: string = "";
    public email: string = "";
    public phone: string = "";
    public age: number = 0;

    getDetails() {
      return `name ${this.name} username ${this.username}`;
    }
  }

  class UserBuilder {
    private user: User;

    constructor() {
      this.user = new User();
    }

    setName(value: string) {
      this.user.name = value;
      return this;
    }

    setUsername(value: string) {
      this.user.username = value;
      return this;
    }

    setPassword(value: string) {
      this.user.password = value;
      return this;
    }

    setEmail(value: string) {
      this.user.email = value;
      return this;
    }

    setPhone(value: string) {
      this.user.phone = value;
      return this;
    }

    setAge(value: number) {
      this.user.age = value;
      return this;
    }

    build() {
      return this.user;
    }
  }

  const user1 = new UserBuilder()
    .setName("Sofyan")
    .setUsername("thevhenz")
    .setAge(25)
    .build();

  console.log(user1);

  // Option 2

  class User2 {
    public name: string;
    public username: string;
    public password: string;
    public email: string;
    public phone: string;
    public age: number;

    constructor({
      name = "",
      username = "",
      password = "",
      email = "",
      phone = "",
      age = 0,
    } = {}) {
      this.name = name;
      this.username = username;
      this.password = password;
      this.email = email;
      this.phone = phone;
      this.age = age;
    }

    getDetails() {
      return `name ${this.name} username ${this.username}`;
    }
  }

  const user2 = new User2({ name: "Dani", username: "dani123" });
  console.log(user2);
}
