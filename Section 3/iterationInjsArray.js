const arr = ['zero', 'one','two','three']

for ( let i =0; i<arr.length; i++){
    console.log(arr[i])
}

for ( i in arr){
    console.log(arr[i])
}

for ( i of arr){
    console.log(i)
}

// for each function

arr.forEach(num =>{
    console.log(num)})
    