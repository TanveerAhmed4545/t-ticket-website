console.log("connected");

const items = document.getElementsByClassName("items");
const phNumber =document.getAnimations('phNumber');
// console.log(items);

let seatCount = 0;
let seatLeftCount = 40;
let totalPrice = 0;
let grandPrice = 0;
const ticketPrice = document.getElementById("taka");
const ticketPriceNumber = parseInt(ticketPrice.innerText);
// console.log(typeof ticketPriceNumber);

for (const item of items) {
  item.addEventListener("click", function () {
    console.log(item.innerText);
    item.style.backgroundColor = "#1DD100";
    item.style.color = 'white';
    seatCount++;
    seatLeftCount--;

    const seats = document.getElementById("seats");
    // console.log(seats);
    seats.innerText = seatCount;
    const seatLefts = document.getElementById("seatLefts");
    // console.log(seatLefts);
    seatLefts.innerText = seatLeftCount;

    const tableBody = document.getElementById("tableBody");

    const tr1 = document.createElement("tr");
    

    tr1.innerHTML = `
        <td>${item.innerText}</td>
        <td>economy</td>
        <td>${ticketPriceNumber}</td>
         `;

    

    tableBody.appendChild(tr1);
    

    const totalAmount = document.getElementById("totalPrice");
    totalPrice = totalPrice + ticketPriceNumber;

    totalAmount.innerText = totalPrice;

    const grandAmount = document.getElementById("grandPrice");
    grandPrice = grandPrice + ticketPriceNumber;

    grandAmount.innerText = grandPrice;

    item.disabled = true;

    if(seatCount >= 4){
       const seats = document.getElementsByClassName('items');
      for(const seat of seats){
        seat.disabled = true;
      }
    }
  });
}

document.getElementById("couponBtn").addEventListener("click", function () {
  // console.log('click')
  const couponElement = document.querySelector("#coupon-Input").value;
  //    console.log(couponElement);
  const couponCode = couponElement.split(" ").join("").toUpperCase();
  //    console.log(couponCode);
  if ("COUPLE20" === couponCode) {
    const discountAmount = totalPrice * 0.2;
    const grandAmount = document.getElementById("grandPrice");
    grandPrice = grandPrice - discountAmount;
    grandAmount.innerText = grandPrice;

    document.querySelector("#coupon-Input").value = "";
    document.querySelector("#coupon-Input").disabled = true;
  } else if ("NEW15" === couponCode) {
    const discountAmount = totalPrice * 0.15;
    const grandAmount = document.getElementById("grandPrice");
    grandPrice = grandPrice - discountAmount;
    grandAmount.innerText = grandPrice;

    document.querySelector("#coupon-Input").value = "";
    document.querySelector("#coupon-Input").disabled = true;
  } else {
    alert("Invalid");
    document.querySelector("#coupon-Input").value = "";
  }
});


