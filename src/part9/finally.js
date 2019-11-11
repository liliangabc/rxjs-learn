const { range, of } = require('rxjs')
const { map, retry, catchError, finalize } = require('rxjs/operators')

const throwOnUnluckyNumber = value => {
  if (value === 4) {
    throw new Error('unlucky number 4')
  }
  return value
}

range(1, 10).pipe(
  map(throwOnUnluckyNumber),
  retry(3),
  catchError(err => of(8)),
  finalize(x => console.log('finalize'))
).subscribe(console.log, null, () => console.log('complete'))