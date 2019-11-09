const { interval } = require('rxjs')
const { skipWhile } = require('rxjs/operators')

interval(1000).pipe(
  skipWhile(value => value % 2 === 0)
).subscribe(console.log, null, () => console.log('complete'))