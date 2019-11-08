const { of, interval } = require('rxjs')
const { every } = require('rxjs/operators')

of(3, 1, 4, 1, 5, 9).pipe(
  every(x => x > 0)
).subscribe(console.log)

interval(1000).pipe(
  every(x => x < 3)
).subscribe(console.log, null, () => console.log('complete'))