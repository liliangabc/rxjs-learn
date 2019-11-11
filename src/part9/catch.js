const { range, of } = require('rxjs')
const { map, catchError, repeat, take } = require('rxjs/operators')

const throwOnUnluckyNumber = value => {
  if (value === 4) {
    throw new Error('unlucky number 4')
  }
  return value
}

// range(1, 5).pipe(
//   map(throwOnUnluckyNumber),
//   catchError((err, caught$) => of(8))
// ).subscribe(console.log, null, () => console.log('complete'))

// range(1, 5).pipe(
//   map(throwOnUnluckyNumber),
//   catchError((err, caught$) => of(8).pipe(repeat(8)))
// ).subscribe(console.log, null, () => console.log('complete'))

range(1, 5).pipe(
  map(throwOnUnluckyNumber),
  catchError((err, caught$) => caught$),
  take(10)
).subscribe(console.log, null, () => console.log('complete'))