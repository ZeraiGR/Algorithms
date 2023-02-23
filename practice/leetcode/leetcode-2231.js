// Largest Number After Digit Swaps by Parity
// https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/description/

// Tags: Sorting, Heap (Priority Queue)

const isEven = (n) => {
    return n % 2 === 0;
}

var largestInteger = function(num) {
    const arr = String(num).split('').map(n => +n);
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        if (isEven(arr[i])) {
            let maxIndex = i;
            for (let j = i; j < len; j++) {
                if (isEven(arr[j]) && arr[j] > arr[maxIndex]) maxIndex = j;
            }
            if (maxIndex > i) {
                let temp = arr[maxIndex];
                arr[maxIndex] = arr[i];
                arr[i] = temp;
            }  
        } else {
            let maxIndex = i;
            for (let j = i; j < len; j++) {
                if (!isEven(arr[j]) && arr[j] > arr[maxIndex]) maxIndex = j;
            }
            if (maxIndex > i) {
                let temp = arr[maxIndex];
                arr[maxIndex] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return +arr.join('');
};