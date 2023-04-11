namespace DecoratorSolution {
  interface IProduct {
    getProduct(): any;
  }

  class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }

    getProduct() {
      return {
        name: this.name,
        price: this.price,
      };
    }
  }

  abstract class ProductDecorator implements IProduct {
    protected product: Product;

    constructor(product: Product) {
      this.product = product;
    }

    abstract getProduct(): any;
  }

  class ProductImportDecorator extends ProductDecorator {
    getProduct() {
      return {
        name: this.product.name,
        price: this.product.price + 20000,
        tax: 20000,
      };
    }
  }

  class ProductExportDecorator extends ProductDecorator {
    getProduct() {
      return {
        name: this.product.name,
        price: this.product.price + 40000,
        tax: 40000,
      };
    }
  }

  const productA = new Product("product A", 50000);
  const productAFromImport = new ProductImportDecorator(productA);
  console.log(productAFromImport.getProduct());

  const productB = new Product("product B", 50000);
  const productBFromExport = new ProductExportDecorator(productB);
  console.log(productBFromExport.getProduct());
}
