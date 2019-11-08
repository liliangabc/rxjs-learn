const { empty } = require('rxjs')
const { defaultIfEmpty } = require('rxjs/operators')

empty().pipe(
  defaultIfEmpty('this is default')
).subscribe(console.log)

empty().pipe(
  defaultIfEmpty()
).subscribe(console.log)