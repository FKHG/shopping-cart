let products = document.getElementsByClassName("product");

function sum() {
  let sum = document.getElementById("TOT");
  let arr = document.getElementsByClassName("prix");
  sum.innerText = 0;
  for (x of arr) {
    let txt = x.innerText;
    sum.innerText =
      Number(sum.innerText) + Number(txt.substring(0, txt.length - 1));
  }
}
sum();



for (let i = 0; i < products.length; i++) {
  let elem = products[i];
  let pu = elem.querySelector(".pu").innerText;
  elem.addEventListener("click", e => {
    switch (e.target.className) {
      case "delate":
        elem.delate();
        break;
      case "plus":
        elem.querySelector(".qt").innerText++;

        elem.querySelector(".prix").innerText =
          pu * elem.querySelector(".qt").innerText + "$";
        sum();
        break;
      case "minus":
        if (elem.querySelector(".qt").innerText > 0) {
          elem.querySelector(".qt").innerText--;
          elem.querySelector(".prix").innerText =
            pu * elem.querySelector(".qt").innerText + "$";
          sum();
        }
        break;
    }
  });
}
