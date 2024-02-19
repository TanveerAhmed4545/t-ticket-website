// console.log("connected");

const items = document.getElementsByClassName("items");
const discountArea =document.getElementById('discount-area');
const discountAmountNumbers =document.getElementById('discountAmount');



let seatCount = 0;
let seatLeftCount = 40;
let totalPrice = 0;
let grandPrice = 0;
const ticketPrice = document.getElementById("taka");
const ticketPriceNumber = parseInt(ticketPrice.innerText);
const couponBtn = document.getElementById("couponBtn");
couponBtn.disabled = true;

for (const item of items) {
  item.addEventListener("click", function () {


    item.style.backgroundColor = "#1DD100";
    item.style.color = 'white';
    seatCount++;
    seatLeftCount--;

    

    const seats = document.getElementById("seats");
    seats.innerText = seatCount;

    const seatLefts = document.getElementById("seatLefts");
    seatLefts.innerText = seatLeftCount;

    const tableBody = document.getElementById("tableBody");
    const tr1 = document.createElement("tr");
    tr1.innerHTML = `
        <td>${item.innerText}</td>
        <td>Economy</td>
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

     
     if(seatCount === 4){
      couponBtn.disabled = false;
      // console.log('true');
     }else{
      couponBtn.disabled = true;
     }

    
  });
}

document.getElementById("couponBtn").addEventListener("click", function () {
  // console.log('click')
  const couponElement = document.querySelector("#coupon-Input").value;
  //    console.log(couponElement);
  const couponCode = couponElement;
  // const couponCode = couponElement.toUpperCase();
  //    console.log(couponCode);


  if ("Couple 20" === couponCode) {
    discountArea.classList.remove('hidden');
    const discountAmount = totalPrice * 0.2;
    discountAmountNumbers.innerText =discountAmount;


    const grandAmount = document.getElementById("grandPrice");
    grandPrice = grandPrice - discountAmount;
    grandAmount.innerText = grandPrice;



    document.querySelector("#coupon-Input").value = "";
     const anyCouponArea = document.querySelector("#anyCouponArea");
     anyCouponArea.classList.add("hidden");
    // document.querySelector("#coupon-Input").disabled = true;


  } else if ("NEW15" === couponCode) {

    discountArea.classList.remove('hidden');
    const discountAmount = totalPrice * 0.15;
    discountAmountNumbers.innerText =discountAmount;


    const grandAmount = document.getElementById("grandPrice");
    grandPrice = grandPrice - discountAmount;
    grandAmount.innerText = grandPrice;



    document.querySelector("#coupon-Input").value = "";
    const anyCouponArea = document.querySelector("#anyCouponArea");
     anyCouponArea.classList.add("hidden");
    // document.querySelector("#coupon-Input").disabled = true;


  } else {
    alert("Invalid");
    document.querySelector("#coupon-Input").value = "";
  }
});


const phNumber =document.getElementById('phNumber');
const nextBtn = document.getElementById('nextBtn');
// phNumber.addEventListener('input',function(){
   
   
//     // console.log(nextBtn);
//     // const numbers = e.value;
//     const numbers = phNumber.value;
//     console.log(numbers.length);
    
//         if(numbers.length > 0 && seatCount > 0){
//             nextBtn.disabled = false;
//         }else{
//             nextBtn.disabled = true;
//         }
    
// });

nextBtn.disabled = true;
phNumber.addEventListener('input', function () {
    const numbers = phNumber.value;
    const isValidInput = numbers.length > 0;
    const isValidSeatCount = seatCount > 0;

    nextBtn.disabled = !(isValidInput && isValidSeatCount);
});


document.getElementById('continue-Btn').addEventListener('click',function(){
  window.location.reload();
});





