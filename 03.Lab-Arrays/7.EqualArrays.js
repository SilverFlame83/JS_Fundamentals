function equalArr (firstArr, secondArr){
    let sum = 0;
    let areEqual = true;

    for (let i = 0; i < firstArr.length && i < secondArr.length; i++){
        let currentFirst = Number(firstArr[i]);
        let currentSecond = Number(secondArr[i]);

        if (currentFirst === currentSecond){
            sum += currentFirst;
        }else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
            
        }
    }
    if(areEqual){
    console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArr(['1','2','3','4','5'], ['1','2','4','4','5']);