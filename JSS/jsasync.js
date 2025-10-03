function register(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('register end');
      resolve();
    },6000);
});}
function sendEmail(){
       return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('send email end');
      resolve();
    },6000);
});
}

function login(){
      return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    //   console.log('login end');
      reject('login failed');
    },6000);
});
}
function getData(){
     return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('get data end');
      resolve();
    },6000);
});
}
function displayData(){
    
      return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('display data end');
      resolve();
    },6000);
});
}
//callback hell
// register(()=>{
// sendEmail(()=>{
// login(()=>{
//  getData(()=>
// {
// displayData();
// });
// });
// });
// });

//using promise 
// register().then(sendEmail).then(login).then(getData).then(displayData).catch((err)=>{
//     console.log("error:"+err);
// }).finally(()=>{
//     console.log('inside finally');
// });
async function f1(){
    try{
await register();
await sendEmail();
await login();
await getData();
await displayData();
    }
    catch(err){
        console.log('Error:'+err);
    }
}
f1();
console.log('call other data');