const { interval } = require('rxjs')
const { publishBehavior, take, refCount, tap } = require('rxjs/operators')

const tick$ = interval(1000).pipe(
  take(3)
)
const sharedTick$ = tick$.pipe(
  publishBehavior(-1),
  refCount()
)
sharedTick$.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  sharedTick$.subscribe(value => console.log('observer 2: ' + value));
}, 2500);
setTimeout(() => {
  sharedTick$.subscribe(value => console.log('observer 3: ' + value));
}, 5000)