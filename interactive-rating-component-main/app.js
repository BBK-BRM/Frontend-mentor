
const ratingState = document.querySelector('.rating_state');
const thankState = document.querySelector('.thank_state');

const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    thankState.classList.remove('hidden');
    ratingState.classList.add('hidden');
})

const rating =document.querySelector('#rating-value');
const rates = document.querySelectorAll('.value');
rates.forEach((rate)=>{
    rate.addEventListener('click',()=>{
        rate.classList.toggle('select');
        rating.innerHTML=rate.innerHTML;
    },)
})