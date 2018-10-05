function search(arr, key){
    var pivot = searchPivot(arr, 0, arr.length - 1);
    console.log(pivot);
}

function searchPivot(arr, start, end) {
    if(end < start)
        return -1;
    if(end == start)
        return start;

    var mid = Math.floor((start + end)/2);

    if(arr[mid] > arr[mid + 1])
        return mid;
    else if(arr[mid] < arr[start])
        return searchPivot(arr, start, mid );
    else
        return searchPivot(arr, mid + 1, end);
}

search([10,11,12,13,14,1,2,3,4,5,6,7,8],3);
search([1,2,3,5],3);
search([10,11,12,7,8],3);
search([10,1,2],3);
search([10,12,3,4,9],3);
search([1],3);