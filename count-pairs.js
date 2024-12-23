// add whatever parameters you deem necessary
function countPairs(arr, target) {
    arr.sort((a,b) => a-b);

    let count = 0;
    let left = 0;
    let right = arr.length -1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            count++;
            left++;
            right--;
        } else if (sum < target) {
            left++
        } else {
            right--;
        }
    }

    return count;
}
