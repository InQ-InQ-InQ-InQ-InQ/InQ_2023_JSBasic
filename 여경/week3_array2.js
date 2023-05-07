function solution(array) {
    let subject = {};
    for (let i=0; i<array.length; i++){
        if(subject[array[i]] === undefined){
            subject[array[i]]=1;
        } else {
            subject[array[i]] += 1;
        }
    }
    
    let Array1=[];
    for (let key in subject){
        Array1.push(subject[key])
    }
    let maxNum = Math.max(...Array1);
    let Array2 = [];
    for(let key in subject){
        if (subject[key] === maxNum){
            Array2.push(key)
        }
    }
    if(Array2.length > 1){
        return -1
    } else {
        return Number(Array2[0])
    }
}