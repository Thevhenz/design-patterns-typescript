import Operation from "./OperationService.ts";

const calculate1 = (): number => {
  const num1 = 20;
  const num2 = 30;

  return Operation(num1, num2);
};

const calculate2 = (): number => {
  const num1 = 18;
  const num2 = 5;

  return Operation(num1, num2);
};

console.log(calculate1());
console.log(calculate2());
