const { interval, pipe } = require('rxjs')
const { filter, take } = require('rxjs/operators')

function takeCountWhile(count, predicate) {
  return pipe(
    filter(predicate),
    take(count)
  )
}

interval(1000).pipe(
  takeCountWhile(
    2,
    value => value % 2 === 0
  )
).subscribe(console.log, null, () => console.log('complete'))