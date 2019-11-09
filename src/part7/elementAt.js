const { of } = require('rxjs')
const { elementAt } = require('rxjs/operators')

of(3, 1, 2).pipe(
  elementAt(3, null)
).subscribe(console.log)