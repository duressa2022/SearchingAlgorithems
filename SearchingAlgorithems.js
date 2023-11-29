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
function inOrderSearch(array,root,key){
    if(root<array.length){
        left=inOrderSearch(array,root*2+1,key)
        if(array[root]==key){
            return true
        }
        right=inOrderSearch(array,root*2+2,key)
        return left || right
    
    }
    return false
}
function postOrderSearch(array,root,key){
    if(root<array.length){
        left=postOrderSearch(array,root*2+2,key)
        right=postOrderSearch(array,root*2+2,key)
        if(array[root]==key){
            return true
        }
        return left ||right
    }
    return false
}
function breadthFirstSearch(array,root,key){
    let queue=[root]
    while(queue.length!=0){
        current=queue.shift()
        if(array[current]==key){
            return true
        }
        if(current*2+1<array.length){
            queue.push(current*2+1)
        }
        if(current*2+2<array.length){
            queue.push(current*2+2)
        }
    }
    return false
}
function DepthFirstGraphSearch(graph,source,key,visted=[]){
    if(source==key){
        return true
    }
    visted.push(source)
    for(let neighbor of graph[source]){
        if(!(neighbor in visted)){
            DepthFirstGraphSearch(graph,neighbor,key,visted)
        }
    }
    return false
}
function preOrderSearchUsingStack(array,root,key){
    let stack=[root]
    while(stack.length!=0){
       let current=stack.pop()
        if(current==key){
            return true
        }
        if(current*2+1<array.length){
            stack.push(current*2+1)
        }
        if(current*2+2<array.length){
            stack.push(current*2+2)
        }
    }
    return false
}
function inOrderSearchingUsinStack(array,root,key){
    let stack=[]
    let current=root
    while(stack.length || current<array.length){
        while(current<array.length){
            stack.push(current)
            current=current*2+1
        }
        if(stack.length>0){
            let temp=stack.pop()
            if(array[temp]==key){
                return true
            }
            current=temp*2+2
        }
    }
    return false
}
function postOrderSearchUsingStack(array,root,key){
    let stack=[]
    let current=root
    while(stack.length>0 || current<stack.length){
        while(current<stack.length){
            stack.push(current)
            if(current*2+2<array.length){
                stack.push(null)
            }
            current=current*2+1
        }
        if(stack.length>0){
            temp=stack.pop()
            if(temp!=null){
                if(array[temp]==key){
                    return true
                }
            }else{
                temp=stack.pop()
                stack.push(temp)
                current=temp*2+2
            }
        }
    }return false
}