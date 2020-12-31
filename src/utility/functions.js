const stringCutter = (str) => {
  if (str.length > 60) {
    return str.substr(0, 54) + "...";
  }
  return str;
};

const currencyFormatter = (number) => {
  return new Intl.NumberFormat("en-In", {
    styled: "currency",
    maximumSignificantDigits: 3,
  }).format(number);
};

export { stringCutter, currencyFormatter };
