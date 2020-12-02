function addNumber(...number){
    sum = 0
    for (index in number){
        console.log(index)
        sum = sum + number[index]
       
    }
    console.log(sum)
    for ( i of number){
        i = i+i
        console.log(i)
    }
}

addNumber(1,2,3,4,512)