// //types of function in js 
// function hello(user='guest'){   //function body 
//    console.log(`Hello ${user}`)
// }
// hello();//if we are not taking then it will take the default value guest
// hello("Srishti");   //calling of function

// //provides reusability for code 

// function sum(a=0,b=0)    //if we want to run if it doesnot pass value then it will give acc to default value 
// { 
//     console.log('before return')
//         return a+b;
//         console.log()//this is unreachable code 
    
// }
// const z=sum(10,34);
// console.log(z);

const sum=(a=5,b=6)=>a+b;
console.log(sum());

//IIFE
(   //we need not to call this function this will call itself 
    function(){
        console.log("inside IIFE");
    }
)();

//callback function 
function f1(user,callback)   //here we want user and callback
{
  console.log(`hello ${user}`);
  callback();
}

f1('admin',()=>{
    console.log(sum());
});