const { of, interval } = require('rxjs')
const { distinct, map, distinctUntilChanged, distinctUntilKeyChanged } = require('rxjs/operators')

// of(0, 1, 1, 2, 0, 0, 1, 3, 3).pipe(
//   distinct()
// ).subscribe(
//   console.log,
//   null,
//   () => console.log('complete')
// )

// of(
//   {name: 'RxJS', version: 'v4'},
//   {name: 'React', version: 'v15'},
//   {name: 'React', version: 'v16'},
//   {name: 'RxJS', version: 'v5'}
// ).pipe(
//   distinct(x => x.name)
// ).subscribe(
//   console.log,
//   null,
//   () => console.log('complete')
// )

// interval(100).pipe(
//   map(x => x % 1000),
//   distinct(null, interval(500))
// ).subscribe(console.log)

of(0, 1, 1, 2, 0, 0, 1, 3, 3).pipe(
  distinctUntilChanged()
).subscribe(
  console.log,
  null,
  () => console.log('complete')
)

of(
  {name: 'RxJS', version: 'v4'},
  {name: 'React', version: 'v15'},
  {name: 'React', version: 'v16'},
  {name: 'RxJS', version: 'v5'}
).pipe(
  distinctUntilChanged((a, b) => a.name === b.name)
).subscribe(
  console.log,
  null,
  () => console.log('complete')
)

of(
  {name: 'RxJS', version: 'v4'},
  {name: 'React', version: 'v15'},
  {name: 'React', version: 'v16'},
  {name: 'RxJS', version: 'v5'}
).pipe(
  distinctUntilKeyChanged('name')
).subscribe(
  console.log,
  null,
  () => console.log('complete')
)