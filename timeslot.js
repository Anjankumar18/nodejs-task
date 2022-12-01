const availability = require('timeslot-availability');

const start = new Date('2022-11-29T08:00:00.000Z');
const end = new Date('2022-11-29T16:00:00.000Z');
const timespan = 60 * 60; // 30 minutes

const siestas = [
  {
    start: '2022-11-29T09:00:00.000Z',
    end: '2022-11-29T12:00:00.000Z',
  },
  {
    start: '2022-11-29T10:00:00.000Z',
    end: '2022-11-29T12:00:00.000Z',
  },
  {
    start: '2022-11-29T13:00:00.000Z',
    end: '2022-11-29T13:30:00.000Z',
  },
];

const bookable = availability(start, end, timespan, siestas);

console.log(bookable);