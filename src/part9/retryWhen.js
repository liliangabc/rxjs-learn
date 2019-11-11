const { range, of, interval, pipe, timer } = require('rxjs')
const { catchError, retryWhen, map, delay, scan, delayWhen } = require('rxjs/operators')

const throwOnUnluckyNumber = value => {
  if (value === 4) {
    throw new Error('unlucky number 4')
  }
  return value
}

const retryWithDelay = (maxCount, delayMilliseconds) => {
  return pipe(
    retryWhen(err$ => {
      return err$.pipe(
        scan((errorCount, err) => {
          if (errorCount >= maxCount) {
            throw err
          }
          return errorCount + 1
        }, 0),
        delay(delayMilliseconds)
      )
    })
  )
}

const retryWithExpotentialDelay = (maxRetry, initialDelay) => {
  return pipe(
    retryWhen(err$ => {
      return err$.pipe(
        scan((errorCount, err) => {
          if (errorCount >= maxRetry) {
            throw err
          }
          return errorCount + 1
        }, 0),
        delayWhen(errorCount => {
          const delayTime = Math.pow(2, errorCount - 1) * initialDelay
          return timer(delayTime)
        })
      )
    })
  )
}

// range(1, 5).pipe(
//   map(throwOnUnluckyNumber),
//   retryWhen(err$ => interval(1000))
// ).subscribe(console.log, null, () => console.log('complete'))

// range(1, 5).pipe(
//   map(throwOnUnluckyNumber),
//   retryWhen(err$ => err$.pipe(delay(1000)))
// ).subscribe(console.log, null, () => console.log('complete'))

range(1, 10).pipe(
  map(throwOnUnluckyNumber),
  retryWithDelay(2, 1000)
).subscribe(console.log, e => console.log(e.message), () => console.log('complete'))