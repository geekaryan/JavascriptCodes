const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather(){
    const choice = select.value;
    
    if (choice === 'sunny'){
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, rand get an ice cream.';
    }else if (choice === 'rainy'){
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and dont stay out for too long.';
    }else if (choice === 'overcast')r
}