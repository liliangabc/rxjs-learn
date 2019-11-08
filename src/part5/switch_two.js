const { interval } = require('rxjs')
const { take, map, switchAll } = require('rxjs/operators')

const ho$ = interval(1000).pipe(
  take(3),
  map(x => interval(700).pipe(
    map(y => x + ':' + y),
    take(2)
  ))
)
const concated$ = ho$.pipe(
  switchAll()
)
concated$.subscribe(console.log, null, () => console.log('complete'))