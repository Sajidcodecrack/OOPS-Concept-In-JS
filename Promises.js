 const prompt = require('prompt-sync')();

//Promise chaining
function asyncFunc(){
    return new Promise((resolev,reject)=>{
        setTimeout(()=>{
            console.log("Encryption 12345 completing  ");
            resolev("Success");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolev,reject)=>{
        setTimeout(()=>{
            console.log("Datas:12345 ");
            resolev("Success");
        },4000);
    });
}
console.log("Fetching data .....");
let p1=asyncFunc();
p1.then((res)=>{
    console.log(res);
    console.log("Fetching data 2 ....");
    let p2=asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    })
});







//  const getpromise = ()=>{
//     return new Promise ((resolve,reject)=>{
//         console.log("I am a promise ");
//         // resolve("Success");
//         reject("Failed");
//     })
//  }
//  let promise= getpromise();
//  promise.then((res)=>{
//     console.log("Promise is resolved successfully ",res);
//  });
//  promise.catch((err)=>{
//     console.log("Promise is rejected by the system ",err);
//  });
// use case of Promise 





// console.log(promise);
// function getData(dataid,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data ",dataid);
//             resolve("Successed");
//             if (getNextData){
//                 getNextData();
//             }
//         },4000)
//     })
// }
// let promise= getData(1234);
// console.log(promise);

//Promise creation