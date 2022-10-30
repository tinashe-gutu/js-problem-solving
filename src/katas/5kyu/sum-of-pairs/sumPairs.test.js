//local tests
const sumPairs = require('./sumPairs')

test('sumPairs finds pairs that sum to taget', ()=>{
    expect(sumPairs([11, 3, 7, 5], 0)).toEqual([3,7])
    expect(sumPairs([4, 3, 2, 3, 4],6)).toEqual([4,2])
    expect(sumPairs([0, 0, -2, 3], 2)).toEqual([])
})
test('sumPairs returns pair with earliest second pair if two are found', ()=>{
    expect(sumPairs([10, 5, 2, 3, 7, 5], 10)).toEqual([3,7])
    expect(sumPairs([10, 6, 4, 3, 7, 8], 13)).toEqual([10,3])
})