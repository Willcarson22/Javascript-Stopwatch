var s = 0;
var tms = 0;
var interval

function timer() {

    tms++;

    if (tms < 10) {
        document.getElementById("tens").innerHTML = "0" + tms;
    }

    if (tms >= 10) {
        document.getElementById("tens").innerHTML = tms;
    }

    if (tms > 99) {
        s++;
        tms = 0;
    }

    if (s < 10) {
        document.getElementById("seconds").innerHTML = "0" + s;
    }

    if (s >= 10) {
        document.getElementById("seconds").innerHTML = s;
    }

   
}

function buttonStart () {
    clearInterval(interval);
    interval = setInterval(timer, 10);
}

function buttonStop() {  

    clearInterval(interval);

}

function buttonReset() {

    clearInterval(interval);
    s = 0;
    tms = 0;
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("tens").innerHTML = "00";

}



