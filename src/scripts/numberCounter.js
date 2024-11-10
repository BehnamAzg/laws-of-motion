// Scroll Activated Number Counter
const count = document.getElementsByClassName("count");
let inc = [];
function intervalFunc() {
  for (let i = 0; i < count.length; i++) {
    inc.push(1);
    if (inc[i] != count[i].getAttribute("data-count")) {
      inc[i]++;
    }
    count[i].innerHTML = inc[i];
  }
}
const counters = document.getElementById("counters");
window.onscroll = function () {
  let timer = setInterval(() => {
    let topElem = counters.offsetTop;
    let botElem = counters.offsetTop + counters.clientHeight;
    let topScreen = window.pageYOffset;
    let botScreen = window.pageYOffset + window.innerHeight;
    if (botScreen > topElem && topScreen < botElem) {
      intervalFunc();
    } else {
      clearInterval(timer);
      for (let i = 0; i < count.length; i++) {
        count[i].innerHTML = 0;
        inc = [];
      }
    }
  }, 100);
};
