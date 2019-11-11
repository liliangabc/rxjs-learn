const { interval } = require('rxjs')
const { publishReplay, take, refCount, tap } = require('rxjs/operators')

const tick$ = interval(1000).pipe(
  take(3),
  tap(x => console.log('source: ', x))
)
const sharedTick$ = tick$.pipe(
  publishReplay(),
  refCount()
)
sharedTick$.subscribe(value => console.log('observer 1: ' + value));
setTimeout(() => {
  sharedTick$.subscribe(value => console.log('observer 2: ' + value));
}, 5000)