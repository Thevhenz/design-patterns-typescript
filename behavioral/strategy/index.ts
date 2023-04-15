interface INumericConverter {
  convertNumber(number: number): void;
}

class NumberConvertion {
  private strategy: INumericConverter;

  constructor(strategy: INumericConverter) {
    this.strategy = strategy;
  }

  execute(num: number): void {
    this.strategy.convertNumber(num);
  }
}

class NumberToCurrency implements INumericConverter {
  convertNumber(num: number): void {
    console.log(
      num.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "IDR",
      })
    );
  }
}

class NumberToDecimalSeparator implements INumericConverter {
  convertNumber(num: number): void {
    console.log(
      num.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
      })
    );
  }
}

class NumberToDate implements INumericConverter {
  convertNumber(num: number): void {
    console.log(new Date(num * 1000).toUTCString());
  }
}

const currency = new NumberConvertion(new NumberToCurrency());
currency.execute(1000000000);

const decimal = new NumberConvertion(new NumberToDecimalSeparator());
decimal.execute(20000);

const date = new NumberConvertion(new NumberToDate());
date.execute(500000);
