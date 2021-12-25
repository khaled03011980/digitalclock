const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
const year = document.querySelector(".year");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function setdatee() {
  const date = new Date();
  const mm = date.getMonth();
  const dd = date.getDate();
  console.log(mm);
  const yyyy = date.getFullYear();
  const secs = date.getSeconds();
  const mins = date.getUTCMinutes();
  const hrs = date.getHours();
  if (hrs < 10) {
    hours.innerHTML = "0" + hrs;
  } else {
    hours.innerHTML = hrs;
  }
  if (mins < 10) {
    minutes.innerHTML = "0" + mins;
  } else {
    minutes.innerHTML = mins;
  }
  if (secs < 10) {
    seconds.innerHTML = "0" + secs;
  } else {
    seconds.innerHTML = secs;
  }
  if (dd < 10) {
    day.innerHTML = "0" + dd;
  } else {
    day.innerHTML = dd;
  }

  month.innerHTML = monthNames[mm];
  year.innerHTML = yyyy;
}

setInterval(setdatee, 1000);
