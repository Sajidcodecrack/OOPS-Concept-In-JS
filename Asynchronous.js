const getPromise = ()=>{
  return new Promise((resolve,reject)=>{
    console.log("Promise is created ");
    // resolve("Successfull");
    reject("Error")
 });
};

let promise=getPromise();
promise.then(()=>{
    console.log("Promise is resolved");
});
promise.catch(()=>{
    console.log("Rejected the promise");
});







// let promise = new Promise((resolve, reject) => {
//     console.log("Promise is created");
//     // Use resolve to avoid the unused variable error
//     resolve("Promise resolved");
//     reject("Some error occurred");
// });

// function getdata(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         // Use dataId and getNextData to avoid the unused variable error
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Data resolved successfully");
//             if (getNextData) {
//                 getNextData()
//             }
//         }, 4000);
//     });
// }





// // console.log("One");

// // setTimeout(()=>{
// //     console.log("three")
// // },5000);
// // console.log("four");