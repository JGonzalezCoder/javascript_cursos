const poster = document.getElementById("poster");
const file = poster.src;
const blur = document.querySelector("#blur");
blur.style.backgroundImage = `url(${file})`;
