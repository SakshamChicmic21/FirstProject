const calculate = (formula, values) => {
  let expr = formula;

  Object.keys(values).forEach(key => {
    expr = expr.replaceAll(key, values[key]);
  });

  return Function(`return ${expr}`)(); // risky but works
};

const formula = "(a + b) * c - d / e + (a * e)";

const values = {
  a: 10,
  b: 5,
  c: 2,
  d: 20,
  e: 4
};
const result = calculate(formula, values);

console.log(result); // 25