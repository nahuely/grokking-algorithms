/*
Usage:
let list = [2,6,8,4,1,2,5,76,123,5,8678678,4,1]
let orderer = selectionSort(list)
console.log(orderer)
*/

/*
Complexity:
worst case is log n*n (cuadratic time)
console.log(n*n)
*/
let swap = (a, b) => array => {
  let aux = array[a]
  array[a] = array[b]
  array[b] = aux
}

let selectionSort = array => {
  let arr = array.slice()
  for(let x = 0; x < arr.length; x++) {
    let min = x
    for(let z = x + 1; z < arr.length; z++) {
      if(arr[z] < arr[min]) min = z
    }
    swap(x, min)(arr)
  }
  return arr
}
