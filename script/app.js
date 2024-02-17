console.log("connected");

const items =document.getElementsByClassName('items');
// console.log(items);



let seatCount = 0;
let seatLeftCount = 40;
let totalPrice = 0;
const ticketPrice = document.getElementById('taka');
const ticketPriceNumber = parseInt(ticketPrice.innerText);
console.log(typeof ticketPriceNumber);


for(const item of items){
    item.addEventListener('click',function(){
        console.log(item.innerText);
        item.style.backgroundColor = '#1DD100';
        seatCount++;
        seatLeftCount--;

        const seats =document.getElementById('seats');
        console.log(seats);
        seats.innerText = seatCount;
        const seatLefts = document.getElementById('seatLefts');
        console.log(seatLefts);
        seatLefts.innerText = seatLeftCount;

        const totalAmount = document.getElementById('totalPrice');
        totalPrice = totalPrice + ticketPriceNumber;

        totalAmount.innerText = totalPrice;
    })
}

