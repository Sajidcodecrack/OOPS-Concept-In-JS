const employ = {
    tax() {
        console.log("Tax is 10%");
    },
};
const bank = {
    salary: 120000,
};

bank.__proto__ = employ;
bank.tax();
console.log(bank.salary);
