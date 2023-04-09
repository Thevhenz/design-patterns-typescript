class Me {
  private firstName: string = "";
  private lastName: string = "";

  getFullName(): string {
    // access db, select user ...
    this.firstName = "firstname";
    this.lastName = "lastname";

    return `${this.firstName} ${this.lastName}`;
  }
}

const fullName = new Me();
console.log(fullName.getFullName());

const fullName2 = new Me();
console.log(fullName2.getFullName());

console.log(fullName === fullName2);
