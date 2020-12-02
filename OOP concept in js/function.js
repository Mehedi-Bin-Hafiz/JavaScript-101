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

var names = ['mehedi hasan', ' mahim hasan', ' hafizur rahman','mamta beagum']

const traverse = (names,callback) =>{
    for (name of names){
        callback(name)
    
    }
}

function myprint(name){
    console.log(name)
}

traverse(names,myprint)


// concept of obj

var person = {}

person.name= ' mehedi'
person.age = 12
person.print  = () =>{
    console.log(`my name is ${this.name} and my age is ${this.age}`)

}

person.print()

