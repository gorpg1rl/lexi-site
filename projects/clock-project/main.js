
let hoursImage = document.querySelector(".hours-image");


function updateClock() {
  
let date = new Date();
  let hours = date.getHours();


  console.log("Hour:", hours);


  // Midnight through 5:59 a.m.
  if (hours < 6) {
    hoursImage.src = "imgs/morning.png";
    hoursImage.style.mixBlendMode = "overlay";
    hoursImage.alt = "fresh penny";
    document.body.style.backgroundColor = "#c56a39"; // copper for fresh penny
  }

  // 6 a.m. through 11:59 a.m.
  else if (hours < 12) {
    hoursImage.src = "imgs/afternoon.png";
    hoursImage.style.mixBlendMode = "overlay";
    hoursImage.alt = "first stage of oxidation";
    document.body.style.backgroundColor = "#b97b58"; // darker copper for first stage of oxidation
  }

  // Noon through 5:59 p.m.
  else if (hours < 18) {
    hoursImage.src = "imgs/evening.jpeg";
    hoursImage.style.mixBlendMode = "overlay";
    hoursImage.alt = "second stage of oxidation";
    document.body.style.backgroundColor = "#487f6e"; // even darker copper for second stage of oxidation
  }

  // 6 p.m. through 11:59 p.m.
  else {
    hoursImage.src = "imgs/night.png";
    hoursImage.style.mixBlendMode = "overlay";
    hoursImage.alt = "third stage of oxidation";
    document.body.style.backgroundColor = "#264b44"; // darkest copper for third stage of oxidation
  }
}

updateClock();

setInterval(updateClock, 1000);