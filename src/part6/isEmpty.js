const { interval, empty } = require('rxjs')
const { isEmpty } = require('rxjs/operators')

interval(1000).pipe(
  isEmpty()
).subscribe(console.log)

empty().pipe(
  isEmpty()
).subscribe(console.log)