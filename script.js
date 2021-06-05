// created a button for T-shirt
const buttonTshirt = document.createElement('button');
document.body.appendChild(buttonTshirt);
buttonTshirt.innerHTML = 'T-shirt';
buttonTshirt.addEventListener('click', clicked);

// created a button for Pant
const buttonPant = document.createElement('button');
document.body.appendChild(buttonPant);
buttonPant.innerHTML = 'Pant';
buttonPant.addEventListener('click', clicked);

// created a button for Ball
const buttonBall = document.createElement('button');
document.body.appendChild(buttonBall);
buttonBall.innerHTML = 'Ball';
buttonBall.addEventListener('click', clicked);

// created a button for VolleyBall
const buttonVolleyBall = document.createElement('button');
document.body.appendChild(buttonVolleyBall);
buttonVolleyBall.innerHTML = 'VolleyBall';
buttonVolleyBall.addEventListener('click', clicked);

function clicked(event){
    if (event.target.value == buttonTshirt){

        // values for buttonTshirt
        amount = [actual_price = 500, discount = '20%', price = actual_price * 80/100] 
        console.log(clicked(amount));
    } else if(event.target.value == 'buttonPant') {

        // values for buttonPant
        amount = [actual_price = 600, discount = '20%', price = actual_price * 80/100] 
        console.log(clicked(amount));
    } else if(event.target.value == 'buttonBall') {

        // values for buttonBall
        amount = [actual_price = 700, discount = '20%', price = actual_price * 80/100] 
        console.log(clicked(amount));
    }  else if(event.target.value == 'buttonVolleyBall') {

        // values for buttonVolleyBall
        amount = [actual_price = 800, discount = '20%', price = actual_price * 80/100] 
        console.log(clicked(amount));
    }

    console.log(clicked('amount'));
}
