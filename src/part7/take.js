const { interval } = require('rxjs')
const { take } = require('rxjs/operators')

interval(1000).pipe(
  take(3)
).subscribe(console.log, null, () => console.log('complete'))