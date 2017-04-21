/*
Usage:
let list = [1,2,3,4,5,6,7,8,9,10]
let result = search(2)(list)
console.log(result)
*/

/*
Complexity:
worst case is log n (log time)
Math.log2(list.length)
*/

let search = value => array => {
  let low = 0
  let high = array.length - 1
  while(low <= high) {
    let middle = Math.floor((low + high) / 2)    
    if(array[middle] === value) return middle
    if(value < array[middle]) {
      high = middle - 1
    } else {
      low = middle + 1
    }
  }
  return null
}


/*
Usage:
let list = [1,2,3,4,5,6,7,8,9,10]
let result = search(2)(list)
console.log(result)
*/

/*
Complexity:
worst case is n (linear time)
list.length
*/

let linearSearch = value => array => {
  for(let x = 0; x < array.length; x++) {
    if(array[x] === value) return x
  }
  return null
}
