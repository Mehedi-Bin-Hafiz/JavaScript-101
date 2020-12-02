// callback function
// using es6 version
const mycallback =(a , b, callback)=>{
    var c = a+b
    var d = a-b
    callback(c,d)
}

//using normal js
function print(c,d){
    console.log(`c is ${c} d is ${d}`)
}

let multi = (c,d) =>{
    console.log(c*d)
}

mycallback(1,3, print)
mycallback(3,4,multi)