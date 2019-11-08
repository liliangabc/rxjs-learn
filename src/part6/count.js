const { of, timer } = require('rxjs')
const { concat, count } = require('rxjs/operators')

of(1, 2, 3).pipe(
  concat(of(4, 5, 6)),
  count()
).subscribe(console.log)

timer(1000).pipe(
  concat(timer(1000)),
  count()
).subscribe(console.log)