const { range } = require('rxjs')
const { reduce } = require('rxjs/operators')

range(1, 100).pipe(
  reduce((acc, current) => acc + current)
).subscribe(console.log)