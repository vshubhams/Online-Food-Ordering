
let data = JSON.parse(localStorage.getItem('cart'))
function showDish() {
    let grid = document.getElementById('grid');

    data.forEach(function (el) {
        let div = document.createElement('div');

        let h3_name = document.createElement('h3');
        h3_name.innerHTML = el.name;

        let image = document.createElement('img');
        image.src = el.img;

        let p_price = document.createElement('p');
        p_price.innerHTML = `₹: ${el.price}`;

        let p_descrip = document.createElement('p');
        p_descrip.innerHTML = el.descrip;

        let p_time = document.createElement('p');
        p_time.innerHTML = `Time to prepare: ${el.time}`;

        div.append(h3_name, image, p_price, p_descrip, p_time);
        grid.appendChild(div)
    })
}
showDish();

function submitOrder() {
    alert('Your order is accepted')
    let i = 0;
    setTimeout(function () {
        alert('Your order is being cooked')
    },3000)
    setTimeout(function () {
        alert('Your order is ready')
    },8000)
    setTimeout(function () {
        alert('Order out for delivery')
    },10000)
    setTimeout(function () {
        alert('Order delivered')
    },12000)
    
}