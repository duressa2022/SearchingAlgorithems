function linearSearch(array,key){
    for(let i=0;i<array.length;i++){
        if(array[i]==key){
            return i
        }
    }
    return -1
}
console.log(linearSearch([1,4,7,8,5,2,3,6],5))