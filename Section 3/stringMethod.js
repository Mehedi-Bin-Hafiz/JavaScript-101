const course = 'coding for beginner'
console.log(course)
console.log(course.search('for'));
console.log(course[0]);
console.log(course.slice(7, 12)); // start, end
console.log(course.substr(7,12)); //7 is index number and 12 is char number

console.log(course.replace('coding', "programming"));
console.log(course.toUpperCase());
console.log(course.toLocaleLowerCase())

var sp = '              lots of spaces'
console.log(sp.trim())
sp = sp.trim()
console.log(sp.split(" "))
console.log(sp.length)