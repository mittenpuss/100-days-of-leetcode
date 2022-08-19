// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 
// Constraints:
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
 
// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

const missingNumber =(input)=>{
    input.sort(function(a, b) {
        return a - b;
      });

    if (input[0]!=0){
        return 0
    }
    for(let i=0; i<input.length; i++){
        if(input[i]+1!=input[i+1]){
            return i+1
        }
    }
}

// console.log(missingNum([5,2,3,1,0]))
// console.log(missingNum([9,6,4,2,3,5,7,0,1]))
// console.log(missingNum([3,0,1]))
// console.log(missingNum([1]))
// console.log(missingNum([0]))
// console.log(missingNum([1,2]))
// console.log(missingNum([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]))