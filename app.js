let allprice = [];

//totalprice function
//main function
function totalprice(event) {
  let btn = event.target;

  let mycart = document.querySelector(".change");
  // mycart.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;
  if (btn.classList.contains("active")) {
    console.log("yes");
  } else {
    let newvalue = parseInt(event.target.value);
    allprice.push(newvalue);
    let sum = 0;
    allprice.forEach((num) => {
      sum += num;
    });
    mycart.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;
    btn.classList.add("addBtnChange");
    btn.classList.add("active");
    btn.innerHTML = "";
    const plus = document.createElement("div");
    plus.classList.add("plus-minus-divs");
    plus.innerHTML = "+";
    const quantity = document.createElement("div");
    quantity.classList.add("plus-minus-divs");
    quantity.classList.add("active");
    let start = 1;
    quantity.innerHTML = start;
    const minus = document.createElement("div");
    minus.classList.add("plus-minus-divs");
    minus.innerHTML = "-";
    btn.appendChild(minus);
    btn.appendChild(quantity);
    btn.appendChild(plus);

    //plus function
    plus.addEventListener("click", function (event) {
      event.stopPropagation();
      let newvalue = parseInt(btn.value);
      allprice.push(newvalue);
      let sum = 0;
      allprice.forEach((num) => {
        sum += num;
      });
      console.log("plus");
      quantity.innerHTML = ++start;
      mycart.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;
      console.log(allprice, btn.value, sum, newvalue, start);
    });

    //minus function
    minus.addEventListener("click", function (event) {
      event.stopPropagation();
      console.log("minus");
      if (start < 2) {
        console.log("first condition", start, allprice);
        btn.classList.remove("addBtnChange");
        btn.classList.remove("active");
        btn.innerHTML = "ADD";
        // mycart.innerHTML = "My cart";
        quantity.innerHTML = --start;
        let ind = allprice.indexOf(parseInt(btn.value));
        allprice.splice(ind, 1);
        let sum = 0;
        allprice.forEach((num) => {
          sum += num;
        });
        mycart.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;
        if (allprice.length < 1) {
          mycart.innerHTML = "My Cart";
          console.log("condition two ", start, allprice);
        }
      } else {
        console.log(allprice, "condition three", start);
        quantity.innerHTML = --start;
        let ind = allprice.indexOf(parseInt(btn.value));
        allprice.splice(ind, 1);
        let sum = 0;
        allprice.forEach((num) => {
          sum += num;
        });
        mycart.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;
      }
    });
  }
}
