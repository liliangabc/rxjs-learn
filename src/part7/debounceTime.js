/**
 * 基于时间的去抖动
 */

const { interval, concat } = require('rxjs')
const { debounceTime, filter, take, mapTo } = require('rxjs/operators')

// interval(1000).pipe(
//   filter(x => x % 3 === 0),
//   debounceTime(2000)
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
  debounceTime(800)
).subscribe(console.log, null, () => console.log('complete'))