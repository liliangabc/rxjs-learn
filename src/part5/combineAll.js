const { interval } = require('rxjs')
const { take, map, combineAll } = require('rxjs/operators')

const ho$ = interval(1000).pipe(
  take(2),
  map(x => interval(1500).pipe(
    map(y => x + ':' + y),
    take(2)
  ))
)
const concated$ = ho$.pipe(
  combineAll()
)
concated$.subscribe(console.log, null, () => console.log('complete'))