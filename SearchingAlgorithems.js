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
console.log(binarySearch([1,2,3,4,5,6,7,8,9],4))