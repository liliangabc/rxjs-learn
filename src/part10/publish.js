const { interval } = require('rxjs')
const { publish, take, refCount } = require('rxjs/operators')

const tick$ = interval(1000).pipe(
  take(3)
)
const sharedTick$ = tick$.pipe(
  publish(),
  refCount()
)
sharedTick$.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  sharedTick$.subscribe(value => console.log('observer 2: ' + value));
}, 5000)