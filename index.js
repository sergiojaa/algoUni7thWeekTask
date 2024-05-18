//1. შექმენით ობიექტი სახელად Person,ობიექტს ექნება სახელი,გვარი,ასაკი.
// let obj = {
//     name: 'sergi',
//     lastName: 'kaliashvili',
//     age: 18
// }
//2. დაამატეთ ობიექტში  ფუნქცია სახელად  sayHello რომელიც დაპრინტავს ობიექტში სახელის values.
// obj.sayHello = () =>{
//     console.log('helo world')
// }
// console.log(obj.sayHello())
//3. წაშალეთ ასაკის property.
// delete obj.age

//4. დაამატეთ ობიექტში job.
// obj.job = 'programmer'
// console.log(obj)

//5. დაამატეთ ობიექტში ფუნქცია რომელიც დააბრუნებს ობიექტის job-ის სიგრძეს.
// obj.jobLength = function(){
//     return this.job.length
// }



//6. ამის შემდეგ დაპრინტეთ უბრალოდ ობიექტში არსებული მეთოდების რაოდენობა.
// let methodQuantity = 0
// for(let key in obj){
//     if(typeof obj[key] === 'function' )
//     methodQuantity++
// }
// console.log(methodQuantity)
//7. დაადგინეთ, აქვს თუ არა ობიექტს gender ფროფერთი. თუ არ აქვს, მაშინ შექმენით მეთოდი რომელიც იმავე ობიექტს gender ფროფერთის შეუქმნის.
// if(!obj.hasOwnProperty('gender') ){
//     obj.setGender = function(gender) {
//         this.gender = gender;
//     }
// }
// if (!obj.hasOwnProperty('gender')) {
//     obj.setGender('male');
//   }
  
//   console.log(obj);
//8. გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property.
// let obj = {
//     name:'sergi',
//     age: 18
// }
// for(let key in obj){
//     console.log(key)
//}
//9. გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value. 
// for (let key in obj) {
//     console.log(obj[key]);
// }

//10. გვაქვს სახელების მასივი. შექმენით ობიექტი, სადაც key-value წყვილებად იქნება სახელები და მათი რაოდენობები მასივში.
let names = ['nika','gio','sergi','sandro','cotne','nika','gio','sergi','sandro','cotne','nika']
let nameCounter = {};
for(let name of names){
    if(!nameCounter.hasOwnProperty(name)){
        nameCounter[name] = 1     
    }else{
        nameCounter[name]++
    }
    
}
console.log(nameCounter)
//11. შექმენით პროდუქტის პროტოტიპი, რომელსაც ექნება მეთოდი პროდუქტის ფასის საჩვენებლად. პროტოტიპზე დაყრდნობით შექმენით რამდენიმე 
//პროდუქტის ობიექტი, რომელთაც ექნებათ სახელისა და ფასის ფროფერთები.
//შექმენით კალათის პროტოტიპი რომელზე დაყრდნობითაც შეიქმნება კალათის ობიექტები. კალათის ობიექტში უნდა გვქონდეს მასივი, სადაც
// შეგვეძლება პროდუქტის ობიექტების დამატება. პროტოტიპშივე უნდა იყოს მეთოდი, რომელიც დაამატებს მასივში ახალ პროდუქტებს და მეთოდი,
// რომელიც დაითვლის კალათაში არსებული ყველა პროდუქტის ჯამურ ფასს.