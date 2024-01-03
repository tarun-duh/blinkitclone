let allprice = [];
function totalprice(event) {
  let newvalue = parseInt(event.target.value);
  allprice.push(newvalue);
  let sum = 0;
  allprice.forEach((num) => {
    sum += num;
  });
  let mycart = document.querySelector(".change");
  mycart.textContent = `${allprice.length} ${""} items ₹${sum}`;
  console.log(sum, allprice.length, mycart);
}
