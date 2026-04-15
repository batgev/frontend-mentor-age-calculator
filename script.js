//inputs
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

//texts
const dayText = document.getElementById("day-field");
const monthText = document.getElementById("month-field");
const yearText = document.getElementById("year-field");

//error states
const dayError = document.getElementById("day-text-error");
const dayErrorMessage = document.getElementById("day-error");

const monthError = document.getElementById("month-text-error");
const monthErrorMessage = document.getElementById("month-error");

const yearError = document.getElementById("year-text-error");
const yearErrorMessage = document.getElementById("year-error");
//calculate btn
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  //gaurd clause
  if (dayInput.value > 32 || dayInput.value < 1) {
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayError.style.color = "hsl(0, 100%, 67%)";
    dayErrorMessage.style.display = "inline";
    dayErrorMessage.style.color = "hsl(0, 100%, 67%)";
    if (monthInput.value > 12 || monthInput.value < 1) {
      monthInput.style.borderColor = "hsl(0, 100%, 67%)";
      monthError.style.color = "hsl(0, 100%, 67%)";
      monthErrorMessage.style.display = "inline";
      monthErrorMessage.style.color = "hsl(0, 100%, 67%)";
    }
    if (yearInput.value > 2026 || yearInput.value < 1111) {
      yearInput.style.borderColor = "hsl(0, 100%, 67%)";
      yearError.style.color = "hsl(0, 100%, 67%)";
      yearErrorMessage.style.display = "inline";
      yearErrorMessage.style.color = "hsl(0, 100%, 67%)";
    }
    return;
  }

  generateResults();
});

const generateResults = () => {
  const now = new Date();

  const birthYear = parseInt(yearInput.value);
  const birthMonth = parseInt(monthInput.value) - 1; // JS months 0-indexed
  const birthDay = parseInt(dayInput.value);

  // Future or invalid date check
  const birthDate = new Date(birthYear, birthMonth, birthDay);
  if (birthDate > now || isNaN(birthDate.getTime())) {
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";

    dayError.style.color = "hsl(0, 100%, 67%)";
    dayErrorMessage.textContent = "Must be a valid day";
    dayErrorMessage.style.display = "inline";

    monthError.style.color = "hsl(0, 100%, 67%)";
    monthErrorMessage.textContent = "Must be a valid month";
    monthErrorMessage.style.display = "inline";

    yearError.style.color = "hsl(0, 100%, 67%)";
    yearErrorMessage.textContent = "Must be a valid year";
    yearErrorMessage.style.display = "inline";
    return;
  }

  // Calculate years

  let years = now.getFullYear() - birthYear;

  const birthdayThisYear = new Date(now.getFullYear(), birthMonth, birthDay);

  if (now < birthdayThisYear) {
    years--;
  }

  // Calculate months and days

  const birthAdjusted = new Date(
    now.getFullYear() - years,
    birthMonth,
    birthDay,
  );

  let months = now.getMonth() - birthAdjusted.getMonth();

  let days = now.getDate() - birthAdjusted.getDate();

  if (days < 0) {
    months--;

    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    days += lastMonth.getDate();
  }

  if (months < 0) {
    months += 12;

    years--;
  }

  dayText.textContent = days;

  monthText.textContent = months;

  yearText.textContent = years;
};
