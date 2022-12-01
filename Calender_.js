const { Calendar } = require('node-calendar-js');

var calendar = new Calendar({
    year : 2020,
    month : 2 ,//month is from 0 to 11
});


console.log(calendar.toString());
// console.log(calendar.create());