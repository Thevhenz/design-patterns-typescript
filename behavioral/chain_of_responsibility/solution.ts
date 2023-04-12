namespace CORSolution {
  class Product {
    name: string;
    price: number;
    weight: number;

    constructor(name: string, price: number, weight: number) {
      this.name = name;
      this.price = price;
      this.weight = weight;
    }
  }

  interface IHandler {
    setNext(handler: IHandler): IHandler;
    handle(request: any): any;
  }

  abstract class AbstractProductHandler implements IHandler {
    private nextHandler: IHandler | null = null;
    public setNext(handler: IHandler): IHandler {
      this.nextHandler = handler;

      return handler;
    }

    handle(request: any): any {
      if (this.nextHandler) {
        return this.nextHandler.handle(request);
      }
      return request;
    }
  }

  class ProductNameHandler extends AbstractProductHandler {
    handle(request: any): any {
      if (request.name.length > 20) {
        return "Product name must be under 20 character.";
      }
      // If the name is < 20 characters, then run this
      return super.handle(request);
    }
  }

  class ProductPriceHandler extends AbstractProductHandler {
    handle(request: any): any {
      if (request.price > 1000000) {
        return "Product price must be under 1M.";
      }
      // If the name is < 20 characters, then run this
      return super.handle(request);
    }
  }

  class ProductWeightHandler extends AbstractProductHandler {
    handle(request: any): any {
      if (request.weight > 5) {
        return "Product weight must be under 5Kg.";
      }
      // If the name is < 20 characters, then run this
      return super.handle(request);
    }
  }

  const product1 = new Product("A", 300000, 7);
  const product2 = new Product("B", 1300000, 4);
  const product3 = new Product("C", 50000, 2);

  const nameHandler = new ProductNameHandler();
  const priceHandler = new ProductPriceHandler();
  const weightHandler = new ProductWeightHandler();

  nameHandler.setNext(priceHandler).setNext(weightHandler);

  console.log(nameHandler.handle(product1));
  console.log(nameHandler.handle(product2));
  console.log(nameHandler.handle(product3));
}
