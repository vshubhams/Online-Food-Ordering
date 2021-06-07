let dish = [
    {
        name: "Dish 1",
        price: 400,
        descrip: "This description of Dish1",
        img: "https://via.placeholder.com/200",
        time:"2hr"
    },
    {
        name: "Dish 2",
        price: 300,
        descrip: "This description of Dish2",
        img: "https://via.placeholder.com/200",
        time:"2hr"
    },
    {
        name: "Dish 3",
        price: 200,
        descrip: "This description of Dish3",
        img: "https://via.placeholder.com/200",
        time:"2hr"
    },
    {
        name: "Dish 4",
        price: 200,
        descrip: "This description of Dish4",
        img: "https://via.placeholder.com/200",
        time:"2hr"
    },
    {
        name: "Dish 5",
        price: 500,
        descrip: "This description of Dish5",
        img: "https://via.placeholder.com/200",
        time:"2hr"
    }
]
localStorage.setItem('dishes', JSON.stringify(dish));

let data = JSON.parse(localStorage.getItem('dishes'))
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

        let addBtn = document.createElement('button');
        addBtn.innerHTML = 'Add to Cart';
        addBtn.onclick = function () {
            addToCart(el);
        }

        div.append(h3_name, image, p_price, p_descrip, p_time,addBtn);
        grid.appendChild(div)
    })
}
showDish();


function addToCart(el) {
    let arr;
    arr = JSON.parse(localStorage.getItem('cart'))
    if (arr == null) {
        arr = [];
    }
    let bool = false;
    arr.forEach(function (e) {
        if (e.name == el.name) {
            alert('Already in cart')
            bool = true;
            return;
        }
    })
    if (bool) {
        return
    }
    arr.push(el);
    localStorage.setItem('cart', JSON.stringify(arr));
}

function goToCart() {
    window.location.href='cart.html'
}

