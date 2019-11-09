const { interval, timer } = require('rxjs')
const { throttle } = require('rxjs/operators')

// interval(1000).pipe(
//   throttle(() => timer(2000))
// ).subscribe(console.log)

interval(1000).pipe(
  throttle(value => timer(value % 3 === 0 ? 2000 : 1000))
).subscribe(console.log)