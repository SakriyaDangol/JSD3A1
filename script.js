// created a button for T-shirt
const buttonTshirt = document.createElement('button');
document.body.appendChild(buttonTshirt);
buttonTshirt.innerHTML = 'T-shirt';
buttonTshirt.setAttribute('value', 'buttonTshirt');
buttonTshirt.addEventListener('click', clicked);

// created a button for Pant
const buttonPant = document.createElement('button');
document.body.appendChild(buttonPant);
buttonPant.innerHTML = 'Pant';
buttonPant.setAttribute('value', 'buttonPant');
buttonPant.addEventListener('click', clicked);

// created a button for Ball
const buttonBall = document.createElement('button');
document.body.appendChild(buttonBall);
buttonBall.innerHTML = 'Ball';
buttonBall.setAttribute('value', 'buttonBall');
buttonBall.addEventListener('click', clicked);

// created a button for VolleyBall
const buttonVolleyBall = document.createElement('button');
document.body.appendChild(buttonVolleyBall);
buttonVolleyBall.innerHTML = 'VolleyBall';
buttonVolleyBall.setAttribute('value', 'buttonVolleyBall');
buttonVolleyBall.addEventListener('click', clicked);

var itemValue;

function clicked(event){
    if (event.target.value == 'buttonTshirt'){

        // values for buttonTshirt
        itemValue = {
            price: 500,
            discount: '20%',
            'price after discount': 500 * 80 /100,
        };
        
        
    } else if(event.target.value == 'buttonPant') {

        // values for buttonPant
        itemValue = {
            price: 600,
            discount: '20%',
            'price after discount': 600 * 80 /100,
         };
       
    } else if(event.target.value == 'buttonBall') {

        // values for buttonBall
        itemValue = {
            price: 700,
            discount: '20%',
            'price after discount': 700 * 80 /100,
        };
        
       
    }  else if(event.target.value == 'buttonVolleyBall') {

        // values for buttonVolleyBall
        itemValue = {
            price: 800,
            discount: '20%',
            'price after discount': 800 * 80 /100,
        };
        

    }

    console.log(itemValue);
}
