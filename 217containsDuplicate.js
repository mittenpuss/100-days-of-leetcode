
 var containsDuplicate = function(nums) {
    let newArray = [...new Set(nums)]
    console.log(newArray)


    if(nums.length === newArray.length &&
          nums.every((val, index) => val === newArray[index])){
            return true
          }else{
            return false
          }

}

console.log(containsDuplicate([2,1,3,4,12]))
console.log(containsDuplicate([2,2,3,5,3]))

