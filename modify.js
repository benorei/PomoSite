sale_ending = document.getElementById("sale-ending");

var countDownDate = new Date().getTime() + (20 * 60 * 1000);

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
    clearInterval(x);
    document.getElementById("sale-ending").innerHTML = "EXPIRED";
    }
}

update_countdown();
setInterval(update_countdown, 1000);