const cardBtn = document.querySelector(".cardBtn");
const inputYear = document.querySelector(".year");
const inputMonth = document.querySelector(".month");
const inputDay = document.querySelector(".day");
const errorKey = document.querySelector("#error");

const days = document.querySelector("#days");
const months = document.querySelector("#months");
const years = document.querySelector("#years");

const NavData = new Date();
const NavYear = NavData.getFullYear();
const NavMonth = NavData.getMonth() + 1;
const NavDay = NavData.getDate();

console.log(NavDay);

if (
  cardBtn.addEventListener("click", (event) => {
    inputDay.value = "";
  })
) {
  error.textContent = "Please enter a number.";
}

cardBtn.addEventListener("click", () => {
  console.log(inputDay.value);
  //   days.textContent = inputDay.value;
  //   months.textContent = inputMonth.value;
  const age = NavYear - inputYear.value;
  years.textContent = age;

  //   const NavData = new Date();
  //   console.log(NavData.getFullYear());
  //   console.log(NavData.getMonth() + 1);
  //   console.log(NavData.getDate());
});
function Dayily(value) {
  if (inputDay.value > 31) {
    inputDay.style.border = "1px solid red";
  }
}

Dayily();
