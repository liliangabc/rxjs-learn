const { range } = require('rxjs')
const { filter } = require('rxjs/operators')

range(1, 5).pipe(
  filter(x => x % 2 === 0)
).subscribe(console.log, null, () => console.log('complete'))