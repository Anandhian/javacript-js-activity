function remove(array){
    const newarray=[];
    for(let i=0; i< array.length; i++ ){
        if(!newarray[array[i]]){
            newarray.push(array[i])
        }
    }
    return newarray
}
const duplicate=[1,2,3,4,5,6,7,8,9]
const newarray=remove(duplicate)
console.log(newarray)