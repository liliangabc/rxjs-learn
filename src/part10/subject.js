const { Subject, interval, Observable } = require('rxjs')
const { take } = require('rxjs/operators')

// const tick$ = interval(1000).pipe(
//   take(3)
// )
// const subject = new Subject()
// tick$.subscribe(subject)
// subject.subscribe(value => console.log('observer 1: ' + value))
// setTimeout(() => {
//   subject.subscribe(value => console.log('observer 2: ' + value))
// }, 1500)


// 基于Subject的自定义操作符 source是管道中上游可观察对象
// 网上找不到这样的例子，实现方案参考自Rxjs6源码
// const makeHot = () => source => {
//   const subject = new Subject()
//   source.subscribe(subject)
//   return Observable.create(observer => subject.subscribe(observer))
// }
// const hotTick$ = interval(1000).pipe(
//   take(3),
//   makeHot()
// )
// hotTick$.subscribe(value => console.log('observer 1: ' + value))
// setTimeout(() => {
//   hotTick$.subscribe(value => console.log('observer 2: ' + value))
// }, 1500)

const subject = new Subject()
interval(1000).pipe(
  take(5)
).subscribe(subject)
subject.subscribe(
  value => console.log('observer: ', value), 
  e => console.log(e.message),
  () => console.log('complete')
)
setTimeout(() => subject.unsubscribe(), 1500)