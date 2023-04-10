interface BaseData {
  getData(): {
    name: string;
    brand: string;
  };
}

interface IProduct extends BaseData {
  name: string;
  brand: string;
}

interface IMaterial {
  name: string;
  qty: number;
}

class Product implements IProduct {
  name: string;
  brand: string;

  constructor(name: string, brand: string) {
    this.name = name;
    this.brand = brand;
  }

  getData() {
    return {
      name: this.name,
      brand: this.brand,
    };
  }
}

class Material implements IMaterial {
  name: string;
  qty: number;

  constructor(name: string, qty: number) {
    this.name = name;
    this.qty = qty;
  }

  getData() {
    return {
      name: this.name,
      qty: this.qty,
    };
  }
}

// let list: any[] = [];

// const product = new Product("Car", "BMW");
// list.push(product.getData());
// console.log(list);

// const material = new Material("Steal", 10);
// const material2 = new Material("Wheels", 4);
// list.push(material.getData());
// list.push(material2.getData());
// console.log(list);

// --------------------------------------------------

// name   |   brand
// -----------------
// Car    |   BMW
// Steal  |   -
// Wheels |   -

// Option 1

class MaterialAdapter implements BaseData {
  private adaptee: Material;

  constructor(adaptee: Material) {
    this.adaptee = adaptee;
  }

  getData() {
    return {
      name: this.adaptee.name,
      brand: "",
    };
  }
}

// let list2: any[] = [];

// const product2 = new Product("Car", "BMW");
// list2.push(product2.getData());
// console.log(list2);

// const material3 = new MaterialAdapter(new Material("Steal", 10));
// const material4 = new MaterialAdapter(new Material("Wheels", 4));
// list2.push(material3.getData());
// list2.push(material4.getData());
// console.log(list2);

// Option 2
enum AdapterType {
  PRODUCT,
  MATERIAL,
}

class DataAdapter implements BaseData {
  public name: string;
  public brand: string;
  public qty: number;
  public type: AdapterType;

  constructor({ name = "", brand = "", qty = 0 } = {}, type: AdapterType) {
    this.name = name;
    this.brand = brand;
    this.qty = qty;
    this.type = type;
  }

  getData() {
    if (this.type === AdapterType.PRODUCT) {
      const product = new Product(this.name, this.brand);
      return {
        name: product.name,
        brand: product.brand,
      };
    } else if (this.type === AdapterType.MATERIAL) {
      const material = new Material(this.name, this.qty);
      return {
        name: material.name,
        brand: "",
      };
    }
    return {
      name: "",
      brand: "",
    };
  }
}

let list3: any[] = [];

const data1 = new DataAdapter(
  { name: "Car", brand: "BMW" },
  AdapterType.PRODUCT
);
list3.push(data1.getData());

const data2 = new DataAdapter({ name: "Steal", qty: 10 }, AdapterType.MATERIAL);
list3.push(data2.getData());

const data3 = new DataAdapter({ name: "Wheels", qty: 4 }, AdapterType.MATERIAL);
list3.push(data3.getData());

console.log(list3);
