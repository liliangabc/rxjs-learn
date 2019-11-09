const { of, interval } = require('rxjs')
const { takeLast, take } = require('rxjs/operators')

// of(3, 1, 4, 1, 5, 9).pipe(
//   takeLast(3)
// ).subscribe(console.log, null, () => console.log('complete'))

interval(1000).pipe(
  take(5),
  takeLast(3)
).subscribe(console.log, null, () => console.log('complete'))