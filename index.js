const multiply = (a , b) => {
    return a * b;
}
console.log(multiply(4,5)) ; 

//feature 1 code
const removeDupl = (arr) =>{
    let result = [];
    for(let i=0; i<arr.length ; i++){
        let dupl = false;
        for(let j=0; j<result.length ; j++){
           if(arr[i] === result[j]){
              dupl = true
              break;
           }
        }
        if(!dupl){
            result.push(arr[i]);
        }
    }
    return result
}
const arrray = [1,2,3,4,2];
console.log(removeDupl(arrray));