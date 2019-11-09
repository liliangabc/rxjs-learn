const { interval, concat, timer } = require('rxjs')
const { audit, take, mapTo } = require('rxjs/operators')

// interval(1000).pipe(
//   throttleTime(2000)
// ).subscribe(console.log)

concat(
  interval(500).pipe(
    take(2),
    mapTo('A')
  ),
  interval(1000).pipe(
    take(3),
    mapTo('B')
  ),
  interval(500).pipe(
    take(3),
    mapTo('C')
  )
).pipe(
  audit(() => timer(800))
).subscribe(console.log, null, () => console.log('complete'))