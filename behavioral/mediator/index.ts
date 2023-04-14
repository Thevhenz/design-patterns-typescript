namespace Mediator {
  interface IProduct {
    name: string;
    sell(): void;
  }

  interface IMediator {
    registerProduct(product: IProduct): void;
    setAvailableStatus(status: Boolean): void;
    isAvalaible(): Boolean;
  }

  class Product implements IProduct {
    name: string;
    mediator: IMediator;

    constructor(name: string, mediator: IMediator) {
      this.name = name;
      this.mediator = mediator;
    }

    sell(): void {
      if (this.mediator.isAvalaible()) {
        this.mediator.setAvailableStatus(false);
        console.log(`Product ${this.name} has sold`);
      } else {
        console.log(`Product is not found`);
      }
    }
  }

  class ProductMediator implements IMediator {
    product?: Product;
    status: Boolean = false;

    registeredProduct(): void {
      if (this.status) {
        console.log(this.product);
      } else {
        console.log(`Item not found`);
      }
    }

    registerProduct(product: Product): void {
      if (this.status) {
        console.log(`Cannot register the product, because still already.`);
      } else {
        this.product = product;
        this.status = true;
        console.log(`Registered product successfull`);
      }
    }

    setAvailableStatus(status: Boolean): void {
      this.status = status;
    }

    isAvalaible(): Boolean {
      return this.status;
    }
  }

  const mediator = new ProductMediator();

  const product1 = new Product("Soap", mediator);
  const product2 = new Product("Shampoo", mediator);

  mediator.registerProduct(product1);
  mediator.registerProduct(product2);

  product1.sell();
  product2.sell();

  mediator.registeredProduct();

  mediator.registerProduct(product2);
  mediator.registeredProduct();

  product2.sell();
  mediator.registeredProduct();
}
