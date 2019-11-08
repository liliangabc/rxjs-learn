const { of } = require('rxjs')
const { min } = require('rxjs/operators')

of(
  { name: 'RxJS', year: 2011 },
  { name: 'React', year: 2013 },
  { name: 'Redux', year: 2015 }
).pipe(
  min((a, b) => a.year - b.year)
).subscribe(console.log)