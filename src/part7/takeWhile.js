const { range } = require('rxjs')
const { takeWhile } = require('rxjs/operators')

range(1, 100).pipe(
  takeWhile(value => value % 2 === 0)
).subscribe(console.log, null, () => console.log('complete'))