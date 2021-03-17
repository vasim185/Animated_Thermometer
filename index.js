const tempUp = () => {
  let temp = document.getElementById("temp");
  temp.innerHTML = "&#xf2cb";


  setTimeout(() => {
    temp.innerHTML = "&#xf2ca";
    temp.style.color = "powderblue";
  }, 1000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c9";
    temp.style.color = "green";
  }, 2000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c8";
    temp.style.color = "orange";
  }, 3000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c7";
    temp.style.color = "red";
  }, 4000);
}

tempUp();

setInterval(tempUp, 5000);
temp.innerHTML = "&#xf2cb";
