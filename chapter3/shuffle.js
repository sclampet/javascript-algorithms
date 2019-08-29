function shuffle(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let randomIdx = Math.floor(Math.random() * arr.length);
    let temp = arr[i]

    arr[i] = arr[randomIdx];
    arr[randomIdx] = temp;

  }

  return arr;
}

console.log(shuffle([1,2,3,4,5]))