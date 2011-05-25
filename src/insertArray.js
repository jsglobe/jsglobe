/**
 * Insert an array from specific index in existing array
 */
function insertArray(arr, index, inserted) {
    arr.splice.apply(arr, [index, 0].concat(inserted));
    return arr;
}
