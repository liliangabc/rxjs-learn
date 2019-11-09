const { interval, timer } = require('rxjs')
const { debounce } = require('rxjs/operators')

// interval(1000).pipe(
//   debounce(() => timer(2000))
// ).subscribe(console.log)

interval(1000).pipe(
  debounce(value => timer(value % 3 === 0 ? 2000 : 1000))
).subscribe(console.log)