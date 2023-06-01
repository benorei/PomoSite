//PICK A TAGLINE
taglines = document.getElementsByClassName("tagline");

console.log(taglines);

console.log(taglines.length);

num_chosen = Math.floor(Math.random() * taglines.length);

console.log(num_chosen);

taglines[num_chosen].style.display = "block";

pomo_shown = false;

// SHOW POMO TERMS
terms = document.getElementsByClassName("pomo-container");
function show_pomo_terms(){
    if(!pomo_shown){
        Array.from(terms).forEach(term => {
            term.style.display = "flex";
        });
        pomo_shown = true;
    }
    else if(pomo_shown){
        Array.from(terms).forEach(term => {
            term.style.display = "none";
        });
        pomo_shown = false;
    }
}


// SALE ENDING COUNTDOWN

sale_ending = document.getElementById("sale-ending");

var countDownDate = new Date().getTime() + (1255 * 1000);

// Update the count down every 1 second

function update_countdown(){
    

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("sale-ending").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(iv);
        document.getElementById("sale-ending").innerHTML = "0d 0h 0m 0s";
    }
}

// update_countdown();
iv = setInterval(update_countdown, 1000);