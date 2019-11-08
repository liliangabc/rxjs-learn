const { interval, never } = require('rxjs')
const { take, map, zipAll, concat } = require('rxjs/operators')

const ho$ = interval(1000).pipe(
  take(2),
  concat(never()),
  map(x => interval(1500).pipe(
    map(y => x + ':' + y),
    take(2)
  ))
)
const concated$ = ho$.pipe(
  zipAll()
)
concated$.subscribe(console.log, null, () => console.log('complete'))