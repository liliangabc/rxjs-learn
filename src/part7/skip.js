const { interval } = require('rxjs')
const { skip } = require('rxjs/operators')

interval(1000).pipe(
  skip(3)
).subscribe(console.log, null, () => console.log('complete'))