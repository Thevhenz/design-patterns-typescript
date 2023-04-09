namespace factorySolution {
  interface ILogistic {
    qty: number;
    deliver(): void;
  }

  class Truck implements ILogistic {
    qty: number;

    constructor(qty: number) {
      this.qty = qty;
    }

    deliver(): void {
      console.log(`Kirim ${this.qty} menggunakan truk.`);
    }
  }

  class Ship implements ILogistic {
    qty: number;

    constructor(qty: number) {
      this.qty = qty;
    }

    deliver(): void {
      console.log(`Kirim ${this.qty} menggunakan kapal laut.`);
    }
  }

  class Plane implements ILogistic {
    qty: number;

    constructor(qty: number) {
      this.qty = qty;
    }

    deliver(): void {
      console.log(`Kirim ${this.qty} menggunakan pesawat.`);
    }
  }

  type TLogisticType = {
    type: string;
    qty: number;
  };

  interface IFactory {
    create(options: TLogisticType): ILogistic;
  }

  class LogisticFactory implements IFactory {
    public create(options: TLogisticType): ILogistic {
      if (options.type === "deliver_by_land") {
        return new Truck(options.qty);
      } else if (options.type === "deliver_by_sea") {
        return new Ship(options.qty);
      } else if (options.type === "deliver_by_air") {
        return new Plane(options.qty);
      }
      throw new Error("class tidak tersedia");
    }
  }

  const logistic = new LogisticFactory();

  const byLand = logistic.create({ type: "deliver_by_land", qty: 20 });
  console.log(byLand.deliver());

  const bySea = logistic.create({ type: "deliver_by_sea", qty: 20 });
  console.log(bySea.deliver());

  const byAir = logistic.create({ type: "deliver_by_air", qty: 20 });
  console.log(byAir.deliver());
}
