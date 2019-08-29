


// function minimumBribes(arr) {
//   let numBribes = 0;
//   let numPeopleBribing = 0;


//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] != i + 1) {
//       console.log(`${arr[i]} is in the wrong spot`)
//       if (arr[i] > i) {
//         let bribesFound = (arr[i] - 1) - i;
//         if (bribesFound > 2) {
//           console.log("Too chaotic")
//           return;
//         }
//         numBribes += bribesFound;
//         numPeopleBribing++
//       }
//     }
//     console.log(`bribes: ${numBribes} numPeople: ${numPeopleBribing}`)
//   }


//   console.log(numBribes);
// }

// function minimumBribes(arr) {
//   let bribes = 0;
//   let didSwap = true;
//   let firstRun = true;


function minimumBribes(arr) {
  let bribes = 0;
  let didSwap = true;
  let firstRun = true;

  while (didSwap === true) {
    didSwap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] - i > 3 && firstRun) {
        console.log("Too chaotic");
        return;
      }

      if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        didSwap = true;
        bribes++;
      }
    }
    firstRun = false;
  }


  console.log(bribes);
  return;
}


let arr = [1, 2, 5, 3, 4, 7, 8, 6];
let arr1 = [2, 5, 1, 3, 4];
let arr2 = [1, 2, 5, 3, 7, 8, 6, 4];

minimumBribes(arr);
minimumBribes(arr1);
minimumBribes(arr2);
