lis = ['one', 232.23, [],{}]

console.log(typeof(lis))
lis.push('mehedi')
console.log(lis)

popitem = lis.pop()
console.log(popitem);
console.log(lis)

// applying for loop 

for (x in lis){
    console.log(lis[x]);
}
