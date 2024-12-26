function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        }, 3000);
    });
}
async function getWeather() {
    await api();
}
function getData(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataid);
            resolve("Success");
            reject("Failed");
        }, 2000);
    });
}
async function getAlldata() {
    await getData(1234);
    await getData(5678);
    await getData(9012);
    await getData(3456);
    await getData(7890);
    await getWeather(4345);

}

console.log(getWeather());
console.log(getAlldata());