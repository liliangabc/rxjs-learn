const { of } = require('rxjs')
const { first } = require('rxjs/operators')

// of(3, 1, 4, 1, 5, 9).pipe(
//   first()
// ).subscribe(console.log, null, () => console.log('complete'))

// of(3, 1, 4, 1, 5, 9).pipe(
//   first(x => x % 2 === 0)
// ).subscribe(console.log, null, () => console.log('complete'))

of(3, 1, 4, 1, 5, 9).pipe(
  first(x => x < 0)
).subscribe(console.log, e => console.error(e.message), () => console.log('complete'))