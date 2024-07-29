function moveDate(direction) {
    if (direction === "prev") {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
    } else if (direction === "next") {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
    }
    showCalendar(currentMonth, currentYear);
}
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

const currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();

const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");
const daysElement = document.getElementById("days");

showCalendar(currentMonth, currentYear);

function showCalendar(month, year) {
    var firstDay = new Date(year, month).getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    monthElement.innerHTML = monthNames[month];
    yearElement.innerHTML = year.toString();
    daysElement.innerHTML = "";

    for (var i = 0; i < firstDay; i++) {
        var dayElement = document.createElement("div");
        dayElement.classList.add("day");
        daysElement.appendChild(dayElement);
    }

    for (var i = 1; i <= daysInMonth; i++) {
        var dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = i;
        daysElement.appendChild(dayElement);
    }
}

