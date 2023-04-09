class Truck {
  private qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`Kirim ${this.qty} menggunakan truk.`);
  }
}

class Ship {
  private qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`Kirim ${this.qty} menggunakan kapal laut.`);
  }
}

let type = "delivery_by_land";

if (type == "delivery_by_land") {
  new Truck(100);
} else if (type == "delivery_by_sea") {
  new Ship(100);
} else {
  ("Armada belum tersedia");
}
