const { interval, timer } = require('rxjs')
const { takeUntil } = require('rxjs/operators')

interval(1000).pipe(
  takeUntil(timer(2500))
).subscribe(console.log, null, () => console.log('complete'))