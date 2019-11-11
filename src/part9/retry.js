const { range, of } = require('rxjs')
const { catchError, retry, map } = require('rxjs/operators')

const throwOnUnluckyNumber = value => {
  if (value === 4) {
    throw new Error('unlucky number 4')
  }
  return value
}

range(1, 5).pipe(
  map(throwOnUnluckyNumber),
  retry(2),
  catchError(err => of(8))
).subscribe(console.log, null, () => console.log('complete'))