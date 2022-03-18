/* GIVEN array of values AND param which specifies even or odd
   sortArr function sorts values by their index, beginning from the end of the array
   Use 'node index.js' to run code and view results in the console

   For odd: 
   The last item in the initial array will be the first valid item 
   to be pushed into the new array (Where index is equal to array.length - 1)
   
   For even:
   The second to last item in the initial array will be the first valid item 
   to be pushed into the new array (Where index is equal to array.length - 2)
*/

function sortArr(arr, par) {
  let newArr = [];
  if (par === 'even') {
    for (i = 0; i < arr.length; i++) {
      if ((i + 1) % 2 === 0) {
        newArr.push(arr[i]);
      }
    }
  }
  if (par === 'odd') {
    for (i = 0; i < arr.length; i++) {
      if ((i + 1) % 2 != 0) {
        newArr.push(arr[i]);
      }
    }
  }
  console.log({ 'Sorted Array': newArr });
}

runTest();
function runTest() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const parA = 'odd';
  console.log('---Test to get odd values---');
  console.log({ 'Initial Array': arr });
  sortArr(arr, parA);

  console.log('\n');
  const parB = 'even';
  console.log('---Test to get even values---');
  console.log({
    'Initial Array': [3, 6, 88, 24, 2, 8, 49, 0, 278, 1, 96, 46, 1942],
  });
  sortArr([3, 6, 88, 24, 2, 8, 49, 0, 278, 1, 96, 46, 1942], parB);
}
