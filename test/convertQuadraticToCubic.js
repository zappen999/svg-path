var test = require('tape')
var Path = require('../lib/Path')

test('absolute', function (t) {
  var path = new Path([
    { type: 'M', relative:false, x:275, y:175 },
    {
      type: 'Q',
      relative:false,
      x:125,
      y:175,
      x1:200,
      y1:500
    }
  ])

  path.convertQuadraticToCubic()

  t.same(path.content,
    [
      { type: 'M', relative:false, x:275, y:175 },
      {
        type: 'C',
        relative:false,
        x:125,
        y:175,
        x1:225,
        y1:391.6666666666667,
        x2:175,
        y2:391.6666666666667
      }
    ])
  t.end()
})

test('relative', function (t) {
  var path = new Path([
    { type: 'M', relative:false, x:100, y:100 },
    {
      type: 'Q',
      relative:true,
      x:100,
      y:0,
      x1:50,
      y1:50
    }
  ])

  path.convertQuadraticToCubic()

  t.same(path.content,
    [
      { type: 'M', relative:false, x:100, y:100 },
      {
        type: 'C',
        relative:false,
        x:200,
        y:100,
        x1:133.33333333333334,
        y1:133.33333333333334,
        x2:166.66666666666666,
        y2:133.33333333333334
      }
    ])
  t.end()
})
