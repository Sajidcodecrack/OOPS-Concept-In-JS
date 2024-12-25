function getData(dataid, getNextData) {
    setTimeout(() => {
        console.log("Fetched the data from the database: ", dataid);
        if (getNextData) {
            getNextData();
        }

    }, 2000);
}

// callback hell
getData(4322, () => {
    console.log("Fetching the data ....");
    getData(2344, () => {
        console.log("Fetching the data ....");
        getData(123456, () => {
            console.log("Fetching the data ....");
            getData(7890, () => {
                console.log("Fetching the data ....");
                getData("Finally all the data is fetched from the database and ready for deployment");
            });
        });
    });
});