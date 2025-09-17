function register(){
    waitforfiveseconds();
    console.log('register end');

}
function sendEmail(){
     waitforfiveseconds();
    console.log('send email end');
}

function waitforfiveseconds(){
    
    const ms=new Date().getTime()+5000;   //5000 ms means delay of 5 second 
    while(new Date().getTime()<ms){
        //no task is done 
    }
}
function login(){
     waitforfiveseconds();
    console.log('login end');
}
function getData(){
     waitforfiveseconds();
    console.log('get data end');
}
function displayData(){
     waitforfiveseconds();
    console.log('display data end');
}

register();
sendEmail();
login();
getData();
displayData();
console.log('call other data')