/*
 * DO NOT ALTER OR REMOVE THIS  NOTICES OR THIS FILE HEADER FROM THE CODE.
 * This code is free software you can redistribute it and/or modify it
   published by the Good will of the author.

 * This code is distributed in the hope that it will be useful,Therefore
   use this code for your need or purpose and you can inform Error or part
   to modify or add.
 * Modifiying this code in a part or as Whole is possible and incremental modification is
   suggested please inform the author any modification you have done.
 * Please contact the Author,if you need additional information or have any questions.
     *Author:Duressa Shukuri
     *Email:duressashukuri2022@gmail.com
*/
function linearSearch(array,key){
    for(let i=0;i<array.length;i++){
        if(array[i]==key){
            return i
        }
    }
    return -1
}
function binarySearch(array,key){
    let low=0
    let high=array.length-1
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(array[mid]==key){
            return mid
        }else if(array[mid]>key){
            high=mid-1
        }else{
            low=mid+1
        }
    }
    return -1
}
function preOrderSearch(array,root,key){
    if(root<array.length){
        if(array[root]==key){
            return true
        }
        left=preOrderSearch(array,root*2+1,key)
        right=preOrderSearch(array,root*2+2,key)
        return left || right
    }
    return false

}
console.log(preOrderSearch([1,4,7,8,5,2,3],0,7))
