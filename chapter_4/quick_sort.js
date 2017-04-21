let quickSort = array => {
  if(array.length < 2) {
    return array
  }

  let position = Math.floor(Math.random() * array.length)
  let pivot = array[position]

  let low = array.filter((d, i) => d <= pivot && position != i)
  let high = array.filter(d => d > pivot && d != pivot)

  return [].concat(quickSort(low), pivot, quickSort(high))
}

console.log(quickSort([54,7,3,8,4,1,2,1434,7,8,0,0]))
