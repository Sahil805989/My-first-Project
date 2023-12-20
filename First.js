/*const insta={
    fullName : "shardhakhapra",
    isfollow: true,
    message: false,
    posts:195,
    followers: 159,
    following: 4,
    realName: "shardha Khapra",
    id: "@shardhakhapra",
    profession: "Entrepreneur",
    heading: "Apna college",



};
console.log(insta)
insta["fullName"]="sahil"
insta["followers"]=120
console.log(insta)*/
// let number=13;
// if(number%2===0){
//     stmt="It is Even"
// }//else{
    
//    // stmt="It is odd"
// //}
// if(number%2!==0){
//     stmt="It is odd"
// }
// console.log(stmt);
// let age=16;
// let result=age>=18?"adult":"Not adult";
// console.log(result)
// let number=prompt("Enter a number: ");
// let result=number%5===0?"Multiple of 5":"Not a multiple";
// console.log(result);
// let number=prompt("Enter a number:");
// if(number%5===0){
//     stmt="It is multiple of 5";
// }else{
//     stmt="Not a mul of 5";
// };
// console.log(stmt);
// let grades=prompt("Enter your Grades: ")
// if(grades<=100 && grades>=90){
//     result="A";
// } else if(grades>=80 && grades<=89){
//     result="B";}
//     else if(grades>=70 && grades<=79);{
//     result="C";
// }
// console.log(result)
// for(let i=1; i<=5 ; i++){
//     console.log(i);
// }
// let i=1;
// sum=0
// let n=prompt("Enter a number: ")
// while(i<=n){
//     sum=sum+i;
    
//     i++
// };
// console.log(sum);
// for(i=0;  i<=10;i++){
//     if(i%2===0){
//     console.log(i)
// }
// }
// i=0;
// while(i<=100 ){
//     if(i%2==0){
//     console.log(i);
//     }
//     i++

// }
// let number=25;
// let usernum = prompt("Enter a number: ");

// while(usernum!="25"){
//     usernum= prompt("Enter Number again: ");
// }
// console.log("You guessed right");
// let student= {
// name: "sahil",
// id:981,
// }
// let print
// console.log()
// let username= prompt("Enter your name: ")
// username2= "@"+ username+username.length
// console.log(username2)
// let  marks=[85, 97, 44, 37, 76, 60];
// let sum=0;
// for(i of marks){
//     console.log(i);
//     sum=sum+i;
//     console.log("sum = ", sum);
// }

// console.log("Avergage = " ,sum/marks.length)
// let prices=[250, 645, 300, 900, 50];
// for(i of prices){
//      pricess= i-(i*0.1);
//     console.log(pricess);
    
// }
// console.log(pricess)
// let prices=[250, 645, 300, 900, 50];
// for(let i=0;i<prices.length;i++){
//     let offer=prices[i]/10;
//     prices[i]-=offer;
//     console.log(prices[i]);
    
// }
// console.log(prices);

// let companies=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// // let t1=companies.shift(0);
// // console.log(companies);
// let t2=companies.splice(2,1,"Ola");
// let t3=companies.push("Amazon");
// console.log(companies);
// function calculateSum(a, b){
//     console.log(a+b);
// }
// // let a=prompt("Enter 1st number: ");

// // let b=prompt("Enter 2nd number: ");
// calculateSum(1, 2);
// const sum= (a,b) =>{
//     s=a+b;
//     return s;

// }
// let x= sum(4,5);
// console.log(x);
// const mul=(a,b) =>{
//     console.log(a*b);
// }
// let vowel=0;
// function vowelCount(x){
//     let count=0;
//     for (let i of x){
//         if (i==="a" || i=="e" ||i=="o" || i=="u" || i=="i"){
//             count++;
//         }
     
//     }
//     console.log(count);
    
// }
// vowelCount("abc");
// const vowelCount=(str)=>{
//     let count=0;
//     for(chr of str){
//         if (chr==="a" || chr==="e" || chr==="i" ||chr ==="o"|| chr==="u"){
//             count++
//         }

        
//     }
//     console.log(count);

// }
// let arr=[1,2,3,4,5,6];
// arr.forEach((val)=>{
//     console.log(val);
// })let arr=[1,2,3,4,5,6];
// arr.forEach((i)=>{
//     i*=i;
//     console.log(i);
// }
// )
// 
// let arr=[1,2,3,4,5,6];
// let newarr= arr.map((i)=>{
//     return i*2;

// })
// console.log(newarr);
// let arr=[1,2,3,4,5,6];
// let evennumber=(val)=>{
//     x= val%2==0;
//     return x;
// }
// let newarr=arr.map(evennumber);
// console.log(newarr);
// let arr=[1,2,3,4,5,6,7,,8,9,10];
// let newarr= arr.reduce((res, curr)=>{
//     return res+curr;
// }
// );
// console.log(newarr);
// let marks=[94,56,98,35,67];
// let arr= marks.filter((val)=>{
//     return val>90;
// }
// )
// console.log(arr);
// let n=prompt("Enter the number: ");
// let arr=[];
// for(let i=1; i<=n; i++){
//     arr[i-1]=i;
// }

// let sumarr= arr.reduce((new1, prev)=>{
//     return new1+prev;
// })
// let prdarr= arr.reduce((old, prev)=>{
//     return old*prev;
// })
// console.log(arr);
// console.log("The sum is : " ,sumarr);
// console.log("The product is : " ,prdarr);
// let div=document.querySelector("div");
// console.dir(div);
// console.log(div);
// let div2= document.getElementById("h1");
// console.log(div2)
// let heading=document.querySelector("#heading2");
// console.log(heading);
// let div=document.querySelectorAll("div");
// idx=0;
// for(i of div){
//     i.innerText="hello",idx;
//     idx++
    
// }
// console.log(i.innerText);
// let button= document.createElement("button");
// button.innerText="Click me!";
// button.style.backgroundColor="red";
// button.style.color="white";
// console.log(button);
// document.querySelector("div").before(button);
// let css=document.querySelector(".para2")
// console.log(css);
let para=document.querySelector("p");
para.getAttribute("class");
para.classList.add("para2");

// para.setAttribute("class", "para2");
console.log(para);
