const { of } = require('rxjs')
const { find, findIndex, zip } = require('rxjs/operators')

of(3, 1, 4, 1, 5, 9).pipe(
  find(x => x % 2 === 0)
).subscribe(console.log)

of(3, 1, 4, 1, 5, 9).pipe(
  findIndex(x => x % 2 === 0)
).subscribe(console.log)

const isEven = x => x % 2 === 0
const source$ = of(3, 1, 4, 1, 5, 9)
source$.pipe(
  find(isEven),
  zip(source$.pipe(
    findIndex(isEven)
  ))
).subscribe(console.log)