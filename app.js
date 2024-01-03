function getValue(event) {
  var newValue = event.target.value;
  return newValue;
  //   console.log(event.target.value);
}
let allprice = [];
function totalprice(event) {
  let newvalue = parseInt(getValue(event));
  allprice.push(newvalue);
  let sum = 0;
  allprice.forEach((num) => {
    sum += num;
  });
  console.log(sum, allprice.length);
}
