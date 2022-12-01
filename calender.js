var calendar = require('node-calendar');

var cal = new calendar.Calendar(6);
var yearCalendar = cal.yeardayscalendar(2004);
cal.setfirstweekday(6);
console.log(cal.getfirstweekday());
console.log(calendar.isleap(2024));
console.log(calendar.leapdays(1947,2022));
console.log(calendar.monthrange(1999,2));
calendar.setlocale();
console.log(calendar.day_abbr);
console.log(calendar.timegm([2022, 11, 28, 3, 2, 50]));
console.log(calendar.weekday(2022,11,27));
console.log(cal.itermonthdates(2022,11));
console.log(cal.itermonthdays(2022,11));
console.log(cal.itermonthdays2(2022,11));
console.log(cal.monthdatescalendar(2022,11));
console.log(cal.monthdays2calendar(2022,11));
