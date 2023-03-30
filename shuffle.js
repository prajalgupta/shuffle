function shuffle(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if ((i % 2 === 0 && arr[i] > arr[i-1]) || (i % 2 === 1 && arr[i] < arr[i-1])) {
      [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
    }
  }
}

let input = [2, 1, 5, 3, 11, 7];
shuffle(input);
for (let index = 0; index < input.length; index++)
  document.write(input[index] + " ");