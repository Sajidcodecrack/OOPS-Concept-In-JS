const student = {
    Full_name: "Sajid Ahamed",
    age: 24,
    sex: "male",
    bank_balance: 423543,
    print: function () {
        console.log("Bank balance is :" + this.bank_balance);
        console.log(this.Full_name);
    }
}
student.print();

const car = {
    model: "tesla",
    engine: "electric",
    speed: 230,
    print: function(){
        console.log("Model is : "+ this.model);
    }
}
car.print()