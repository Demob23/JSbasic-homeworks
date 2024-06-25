function addCookie() {
  var cookieCounter = document.getElementById("clicker__counter");
  cookieCounter.textContent = cookiesClicked;
  if (cookiesClicked % 2 === 0) {
    cookieImage.setAttribute('width', 220);
    cookieImage.setAttribute('height', 220);
  } else {
    cookieImage.setAttribute('width', 200);
    cookieImage.setAttribute('height', 200);
  };
  cookiesClicked += 1;
};
var cookiesClicked = 0;
var cookieImage = document.getElementById("cookie");
cookieImage.addEventListener('click', addCookie);