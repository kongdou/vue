// 1. normal denfine way

let PersonOne = {}
PersonOne.name = 'kongdou'
PersonOne['gender'] = 'man'
console.log(PersonOne.name) //kongdou
console.log(PersonOne.gender) //man
console.log(PersonOne.age) //undefined

// 2.Object.defineProperty


let PersonTwo = {}
Object.defineProperty(PersonTwo,'name',{
    value: 'deepsky',
    writable: false //the value can't be modified. if the property is not defined,default false
})
PersonTwo.name = 'kong' 
console.log(PersonTwo.name) // deepsky


// 3.default 
/*
if attribute is ignore,the defalut values are as follows:
value,undefined
get,undefined
set,undefined
writeable,false
enumerable,false
configurable,false
*/

let PersonThree = {}
let temp = null;
Object.defineProperty(PersonThree,'name',{

    get: function(){
        return temp
    },
    set: function(val){
        temp = val
    },
    configurable: false
})

PersonThree.name = 'deepsky'
console.log(PersonThree.name); //deepsky

/*
Object.defineProperty(PersonThree,'name',{
    value: 'test configurable config'
}) //Cannot redefine property: name
*/

Object.defineProperty(PersonThree,'age',{

    get: function(){
        return temp
    },
    set: function(val){
        temp = val
    },
    configurable: true //set true
})

Object.defineProperty(PersonThree,'age',{
    value: 24
})

console.log(PersonThree.age);

// 4.使用属性定义的形式修改属性值
let personFour = {}
Object.defineProperty(personFour,'name',{
    value: 'deepsky',
    writable: false, //不能覆盖
    configurable: true //可以重新定义
})

Object.defineProperty(personFour,'name',{
    value: 'kong'
})

console.log(personFour.name)


