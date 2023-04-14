namespace Obeserver {
  interface Subject {
    attach(observer: Obeserver): void;
    detach(observer: Obeserver): void;
    notify(): void;
  }

  interface Obeserver {
    name: string;
    update(subject: Subject): void;
  }

  class PromoSubject implements Subject {
    public isPromo: Boolean = false;
    private observers: Obeserver[] = [];

    attach(observer: Obeserver): void {
      const isExist: Boolean = this.observers.includes(observer);
      if (isExist) {
        return console.log(`observer ${observer.name} already add`);
      }

      this.observers.push(observer);
      console.log(`observer ${observer.name} add successfull`);
    }

    detach(observer: Obeserver): void {
      const observerIndex = this.observers.indexOf(observer);

      if (observerIndex === -1) {
        return console.log(`observer ${observer.name} not found`);
      }

      this.observers.splice(observerIndex, 1);
      console.log(`observer ${observer.name} delete succesfull`);
    }

    notify(): void {
      for (const observer of this.observers) {
        observer.update(this);
      }
    }

    setPromo(status: Boolean): void {
      this.isPromo = status;
      this.notify();
    }
  }

  class Product implements Obeserver {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    update(subject: Subject): void {
      if (subject instanceof PromoSubject && subject.isPromo) {
        console.log(`The Promo roduct ${this.name} success to publish`);
      }
    }
  }

  const promo = new PromoSubject();

  const hoodie = new Product("Hoodie");
  const pants = new Product("Pants");
  const hat = new Product("Hat");

  promo.attach(hoodie);
  promo.attach(pants);
  promo.attach(hat);

  promo.setPromo(true);
  promo.detach(pants);

  console.log(promo);
}
