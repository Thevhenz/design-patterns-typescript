/*
    1. name < 20 chrt
    2. price < 1M
    3. weight < 5Kg

*/

namespace COR {
  class Product {
    name: string;
    price: number;
    weight: number;

    constructor(name: string, price: number, weight: number) {
      this.name = name;
      this.price = price;
      this.weight = weight;
    }

    validate() {
      if (this.name.length > 20) {
        return "Product name must be under 20 character.";
      } else if (this.price > 1000000) {
        return "Product price must be under 1M.";
      } else if (this.weight > 5) {
        return "Product weight must be under 5Kg.";
      }

      return this;
    }
  }

  const product = new Product("Soap", 5000, 1);
  console.log(product.validate());
}
