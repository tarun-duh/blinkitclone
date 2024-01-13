let allprice = [];
//totalprice function
//main function
function totalprice(event) {
  // console.log("button click ho gya");
  let btn = event.target;
  console.log(event);
  let mycart = document.querySelector(".change");
  let total = document.getElementById("total");
  //phonecart
  if (window.innerWidth < 700) {
    document.getElementById("phoneCart").style.display = "flex";
  }
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
    total.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;

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
      // console.log("plus");
      quantity.innerHTML = ++start;

      mycart.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;
      total.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;

      // console.log(allprice, btn.value, sum, newvalue, start);
    });

    //minus function
    minus.addEventListener("click", function (event) {
      event.stopPropagation();
      // console.log("minus", start);
      if (start < 2) {
        // console.log("first condition", start, allprice);
        btn.classList.remove("addBtnChange");
        btn.classList.remove("active");
        btn.innerHTML = "ADD";
        // mycart.innerHTML = "My cart";
        // quantity.innerHTML = --start;
        let ind = allprice.indexOf(parseInt(btn.value));
        allprice.splice(ind, 1);
        let sum = 0;
        allprice.forEach((num) => {
          sum += num;
        });
        total.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;
        mycart.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;
        if (allprice.length < 1) {
          mycart.innerHTML = "My Cart";
          document.getElementById("phoneCart").style.display = "none";
          // console.log("condition two ", start, allprice);
        }
      } else {
        // console.log(allprice, "condition three", start);
        quantity.innerHTML = --start;
        let ind = allprice.indexOf(parseInt(btn.value));
        allprice.splice(ind, 1);
        let sum = 0;
        allprice.forEach((num) => {
          sum += num;
        });
        total.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;
        mycart.innerHTML = `${allprice.length} ${""} items </br> ₹${sum}`;
      }
    });
  }
}
//phonecart
let viewCart = document.getElementById("viewCart");
viewCart.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("you clicked view cart");
});

//mycartfunc

function myCartFunc() {
  let grand = document.getElementById("grand");
  let sum = 0;
  allprice.forEach((num) => {
    sum += num;
  });
  grand.innerHTML = sum;
  let cartDetails = document.getElementById("cartDetails");
  shopping.addEventListener("click", function () {
    document.getElementById("trans-cart").style.display = "none";
    document.querySelector("body").classList.remove("no-scroll");
  });
  let emptyimage = document.getElementById("emptyimage");
  document.getElementById("trans-cart").style.display = "flex";
  document.querySelector("body").classList.add("no-scroll");
  cartDetails.classList.add("scroll");
  if (allprice.length >= 1) {
    emptycart.style.display = "none";
    bill.style.display = "block";
  }
  let cancle = document.querySelector(".cancle");
  cancle.addEventListener("click", function () {
    document.getElementById("trans-cart").style.display = "none";
    document.querySelector("body").classList.remove("no-scroll");
  });
}

//discountfunc

document.getElementById("apply").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hello tarun");
  console.log(discount.value);
});
