const cardBtn = document.querySelector(".cardBtn");
const inputYear = document.querySelector(".year");
const inputMonth = document.querySelector(".month");
const inputDay = document.querySelector(".day");
const errorKey = document.querySelector(".error");

const days = document.querySelector("#days");
const months = document.querySelector("#months");
const years = document.querySelector("#years");

const NavData = new Date();
const NavYear = NavData.getFullYear();
const NavMonth = NavData.getMonth() + 1;
const NavDay = NavData.getDate();

inputDay.placeholder = NavDay;
inputMonth.placeholder = NavMonth;
inputYear.placeholder = NavYear;
cardBtn.addEventListener("click", () => {
  // Clear previous error message

  if (
    inputDay.value === "" &&
    inputMonth.value === "" &&
    inputYear.value === ""
  ) {
    inputDay.style = "border-color:red !important;";
    inputMonth.style = "border-color:red!important;";
    inputYear.style = "border-color:red!important;";
  } else {
    inputDay.style = "border-color:green!important;";
    inputMonth.style = "border-color:green!important;";
    inputYear.style = "border-color:green!important;";
  }
  let yearNow = NavYear;
  let monthNow = NavMonth;
  let dateNow = NavDay;

  let yearDob = inputYear.value;
  let monthDob = inputMonth.value;
  let dateDob = inputDay.value;
  let age = {};

  yearAge = yearNow - yearDob;

  let monthAge;
  let dateAge;
  if (monthNow >= monthDob) monthAge = monthNow - monthDob;
  else {
    yearAge--;
    monthAge = 12 + monthNow - monthDob;
  }
  if (dateNow >= dateDob) dateAge = dateNow - dateDob;
  else {
    monthAge--;
    dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };

  if (age.years > 1) yearString = " years";
  else yearString = " year";
  if (age.months > 1) monthString = " months";
  else monthString = " month";
  if (age.days > 1) dayString = " days";
  else dayString = " day";
  if (
    inputDay.value !== "" &&
    inputMonth.value !== "" &&
    inputYear.value !== "" &&
    inputYear.value < NavYear &&
    inputDay.value <= 31 &&
    inputMonth.value <= 12
  ) {
    years.textContent = yearAge;
    months.textContent = monthAge;
    days.textContent = dateAge;
    errorKeys.textContent = "";
  } else {
    errorKey.textContent = "Invalid Date";
    inputDay.style = "border-color:red!important;";
    inputMonth.style = "border-color:red!important;";
    inputYear.style = "border-color:red!important;";
  }
});
