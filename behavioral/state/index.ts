namespace State {
  interface IProduct {
    name: string;
    saveAsFeaturedProduct(): void;
  }

  class FeaturedProduct {
    private state: IProduct;

    constructor(state: IProduct) {
      this.state = state;
    }

    setFeaturedProduct(state: IProduct): void {
      this.state = state;
    }

    getFeaturedProduct(): void {
      console.log(this.state);
    }

    publish(): void {
      this.state.saveAsFeaturedProduct();
    }
  }

  class FashionProduct implements IProduct {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    saveAsFeaturedProduct(): void {
      console.log(`Set product ${this.name} as the top product`);
    }
  }

  class ElectronicProduct implements IProduct {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    saveAsFeaturedProduct(): void {
      console.log(`Set product ${this.name} as the top product`);
    }
  }

  const hoodie = new FashionProduct("Hoodie");
  const hat = new FashionProduct("Hat");

  const radio = new ElectronicProduct("Radio");

  const featuredProduct = new FeaturedProduct(hoodie);
  featuredProduct.publish();
  featuredProduct.getFeaturedProduct();

  featuredProduct.setFeaturedProduct(radio);
  featuredProduct.publish();
  featuredProduct.getFeaturedProduct();
}
