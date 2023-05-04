let to_click_div = document.getElementById("mobile-nav-open");
let to_reveal_div = document.getElementById('to-reveal');

to_click_div.onclick = my_func;

function my_func() {
    to_reveal_div.classList.toggle('hidden-mobile');
}

let submit_btn = document.getElementById('submit-button');

console.log(submit_btn);

submit_btn.onclick = function(){
    console.log('I have been clicked')
    let first_date = document.getElementById('first-date-input').value;
    let last_date = document.getElementById('last-date-input').value;
    let difference = calculate_day_difference(first_date, last_date);
    console.log(difference);

    let guest_number = document.getElementById('guest-input').value;
console.log(guest_number);


if (guest_number >= 2 && guest_number <= 6 && difference >= 2 && difference <= 7)
document.getElementById('raglan').classList.remove('disabled')
else 
document.getElementById('raglan').classList.add('disabled')


if (guest_number >= 4 && guest_number <= 6 && difference >= 4 && difference <= 7)
document.getElementById('hydro').classList.remove('disabled')
else 
document.getElementById('hydro').classList.add('disabled')


if (guest_number >= 1 && guest_number <= 6 && difference >= 2 && difference <= 10)
document.getElementById('martinborough').classList.remove('disabled')
else 
document.getElementById('martinborough').classList.add('disabled')


if (guest_number >= 4 && guest_number <= 6 && difference >= 1 && difference <= 3)
document.getElementById('twizal').classList.remove('disabled')
else 
document.getElementById('twizal').classList.add('disabled')


if (guest_number >= 2 && guest_number <= 10 && difference >= 1 && difference <= 9)
document.getElementById('court-house').classList.remove('disabled')
else 
document.getElementById('court-house').classList.add('disabled')


if (guest_number >= 4 && guest_number <= 15 && difference >= 3 && difference <= 15)
document.getElementById('viaduct').classList.remove('disabled')
else 
document.getElementById('viaduct').classList.add('disabled')

if(guest_number >=5 || guest_number <= 1 || difference >=15 || difference <= 1)
document.location.href='../error.html';

}








// IF Hotel Statement

// if (user_input_for_people >= 1 /*min people for hotel*/ && user_input_for_people <= 2 && difference >= 1 && difference <= 5)

//     document.getElementById('hotel').classList.remove('disabled')

// else

//     document.getElementById('hotel').classList.add('disabled')

   