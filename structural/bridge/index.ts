interface Price {
  name: string;
  sellPrice(): string;
}

class Cheap implements Price {
  name: string = "cheap";

  sellPrice(): string {
    return `sale at a ${this.name} price`;
  }
}

class Expensive implements Price {
  name: string = "expensive";

  sellPrice(): string {
    return `sale at a ${this.name} price`;
  }
}

interface IProduct {
  name: string;
}

abstract class Product implements IProduct {
  name: string;
  price: Price;

  constructor(name: string, price: Price) {
    this.name = name;
    this.price = price;
  }
  abstract sell(): void;
}

class Fashion extends Product {
  sell(): void {
    console.log(`Selling ${this.name} for ${this.price.sellPrice()}`);
  }
}

class Computer extends Product {
  sell(): void {
    console.log(`Selling ${this.name} for ${this.price.sellPrice()}`);
  }
}

const fashionCheap = new Fashion("casual shoes", new Cheap());
console.log(fashionCheap.sell());

const computerexpensive = new Computer("MSI", new Expensive());
console.log(computerexpensive.sell());
