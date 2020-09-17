let time = document.getElementById("timer-num");

function myFun() {
  setTimeout(function () {
    green.style.opacity = 1;
    red.style.opacity = 0.2;
    yellow.style.opacity = 0.2;
    time.innerText = 10;
    time.style.color = "green";
  }, 0);

  setTimeout(function () {
    green.style.opacity = 0.1;
    red.style.opacity = 0.1;
    yellow.style.opacity = 1;
    time.innerText = 2;
    time.style.color = "yellow";
  }, 11000);
  setTimeout(function () {
    green.style.opacity = 0.1;
    red.style.opacity = 1;
    yellow.style.opacity = 0.1;
    time.innerText = 20;
    time.style.color = "red";
  }, 14000);
}
function timeset() {
  setInterval(function () {
    time.innerText -= 1;
  }, 1000);
}
timeset();
setInterval(function () {
  myFun();
}, 35000);
myFun();
