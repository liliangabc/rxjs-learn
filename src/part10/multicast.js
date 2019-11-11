const { Subject, interval } = require('rxjs')
const { multicast, take, refCount } = require('rxjs/operators')

// const coldSource$ = interval(1000).pipe(take(3))
// const tick$ = coldSource$.pipe(
//   multicast(new Subject()),
//   refCount()
// )
// tick$.subscribe(value => console.log('observer 1: ' + value))
// setTimeout(() => {
//   tick$.subscribe(value => console.log('observer 2: ' + value))
// }, 1500)
// tick$.connect()

const coldSource$ = interval(1000).pipe(take(3))
const tick$ = coldSource$.pipe(
  multicast(() => {
    console.log('进入工厂函数')
    return new Subject()
  }),
  refCount()
)
tick$.subscribe(value => console.log('observer 1: ' + value))
setTimeout(() => {
  tick$.subscribe(value => console.log('observer 2: ' + value))
}, 5000)