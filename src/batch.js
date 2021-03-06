/**
 * @desc batch() batches an array into smaller arrays of length n.
 *
 * @param {Array} arr - the array to split into batches
 * @param {Number} n - the desired length of each batch
 *
 * @return {Array[]} array of arrays of length n
 */
function batch(arr, n) {
  const len = arr.length;
  const batches = [];

  let i = 0;
  while (i < len) batches.push(arr.slice(i, (i += n)));

  return batches;
}

export default batch;
