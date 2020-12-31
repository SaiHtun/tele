let number = 2500;
console.log(
  new Intl.NumberFormat("en-In", {
    styled: "currency",
    maximumSignificantDigits: 3,
  }).format(number)
);
console.log(number);
