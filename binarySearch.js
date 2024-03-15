function binarySearch(searchList, number) {
    let low = 0;
    let high = searchList.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = searchList[mid];

        if (guess === number) {
            return mid;
        } else if (guess > number) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}

const myList = Array.from({ length: 100 }, (_, index) => index + 1);

console.log(binarySearch(myList, 70));
console.log(binarySearch(myList, 3));
