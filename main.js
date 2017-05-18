var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var daysInMonth = new Date(year, month, 0).getDate();

console.log('Got current time:');
console.log(year + ' ' + month + ' ' + day + ' (days in month: ' + daysInMonth + ')');

// create year dropdown and preselect current
var yearDropDown = document.getElementById('year');
for(var i = 2016; i <= 2080; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  if(year == i) option.selected = true;
  yearDropDown.appendChild(option);
}

// create month dropdown and preselect current
var monthDropDown = document.getElementById('month');
for(var i = 1; i <= 12; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  if(month == i) option.selected = true;
  monthDropDown.appendChild(option);
}

// create day dropdown and preselect current
var dayDropDown = document.getElementById('day');
for(var i = 1; i <= daysInMonth; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  if(day == i) option.selected = true;
  dayDropDown.appendChild(option);
}

// change days in month if month changes
monthDropDown.addEventListener('click', function(e) {
  month = monthDropDown.selectedIndex + 1;
  console.log('Heard a change in month. New month: ' + month);
  daysInMonth = new Date(year, month, 0).getDate();
  console.log('New daysInMonth: ' + daysInMonth);
  if(day > daysInMonth) day = daysInMonth;
  dayDropDown.options.length = 0;
  for(var i = 1; i <= daysInMonth; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    if(day == i) option.selected = true;
    dayDropDown.appendChild(option);
  }
}, false);
