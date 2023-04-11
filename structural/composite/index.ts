/*
    Computer
        PC
            Case
            Motherboard
            Processor's Fan
        Laptop
            Asus ROG
            Lenovo Thinkpad Tseries
        Peripheral
            HDD
                Seagate 1TB
                WD 1TB
            SSD
            Memory RAM
                DDR 2
                DDR 3
            Keyboard
                Mechanical
                    Keychron
                    Tecware
                Standart
                    Logitec
*/

class Category {
  name: string;
  children: any[] = [];

  constructor(name: string) {
    this.name = name;
  }
}

const computer = new Category("Computer");

computer.children = [
  (new Category("PC").children = [
    new Category("Case"),
    new Category("Motherboard"),
  ]),
  (new Category("Laptop").children = [
    new Category("Asus ROG"),
    new Category("Lenovo Thinkpad Tseries"),
  ]),
  (new Category("Peripheral").children = [
    (new Category("HDD").children = [
      new Category("Seagate 1TB"),
      new Category("WD 1TB"),
    ]),
    new Category("SSD"),
    (new Category("Memory RAM").children = [
      new Category("DDR 2"),
      new Category("DDR 3"),
    ]),
    (new Category("Keyboard").children = [
      (new Category("Mechanical").children = [
        new Category("Keychron"),
        new Category("Tecware"),
      ]),
      (new Category("Standart").children = [new Category("Logitec")]),
    ]),
  ]),
];

console.log(computer);
