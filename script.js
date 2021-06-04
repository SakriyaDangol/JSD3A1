const buttonTshirt = document.createElement('button');
document.body.appendChild(buttonTshirt);
buttonTshirt.innerHTML = 'T-shirt';


const buttonPant = document.createElement('button');
document.body.appendChild(buttonPant);
buttonPant.innerHTML = 'Pant';


const buttonBall = document.createElement('button');
document.body.appendChild(buttonBall);
buttonBall.innerHTML = 'Ball';


const buttonVolleyBall = document.createElement('button');
document.body.appendChild(buttonVolleyBall);
buttonVolleyBall.innerHTML = 'VolleyBall';


const Tshirt_Info = {
    actual_price: 500,
    discount: '20%',
    price: 500 * 80 / 100
}

const Pant_Info = {
    actual_price: 600,
    discount: '20%',
    price: 600 * 80 / 100
}

const Ball_Info = {
    actual_price: 100,
    discount: '20%',
    price: 100 * 80 / 100
}

const VolleyBall_Info = {
    actual_price: 700,
    discount: '20%',
    price: 700 * 80 / 100
}


buttonTshirt.addEventListener('click', Tshirt_Info);