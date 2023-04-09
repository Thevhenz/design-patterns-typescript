namespace ProptotypePattern {
  class User {
    public name: string;
    public username: string;
    public password: string;
    public email: string;
    public phone: string;

    constructor(
      name: string,
      username: string,
      password: string,
      email: string,
      phone: string
    ) {
      this.name = name;
      this.username = username;
      this.password = password;
      this.email = email;
      this.phone = phone;
    }

    public clone(): this {
      const clone = Object.assign({}, this);
      return clone;
    }
  }

  const user1 = new User(
    "Sofyan",
    "sofyan",
    "1234",
    "sadadz2@fsad.com",
    "08656387857"
  );

  const user2 = user1.clone();
  console.log(user2);
}
