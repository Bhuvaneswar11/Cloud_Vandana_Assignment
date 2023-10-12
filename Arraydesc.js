const numbers = [5, 2, 9, 1, 4, 6];

function bubbleSortDescending(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
             
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSortDescending(numbers);
console.log(numbers);
