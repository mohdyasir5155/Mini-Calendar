const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today =  new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]

date.innerHTML = today.getdate();
day.innerHTML = today.getDay();
month.innerHTML = today.getMonth();
year.innerHTML = today.getFullYear();