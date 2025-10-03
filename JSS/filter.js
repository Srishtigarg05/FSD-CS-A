import {add,multiply} from './mathmodule.js';
const nums=[1,2,3,4,5,6,7,8,9,10];
const even=nums.filter((n)=>(n%2===0)).map((n)=>(n*n)).reduce((n,s)=>(n+s),0);
console.log(even);
console.log("sum="+add(10,20));
console.log("multiply="+multiply(10,20));
