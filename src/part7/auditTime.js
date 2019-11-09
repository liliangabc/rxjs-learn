const { interval, timer } = require('rxjs')
const { auditTime } = require('rxjs/operators')

interval(1000).pipe(
  auditTime(2000)
).subscribe(console.log)