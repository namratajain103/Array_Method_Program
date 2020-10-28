var data = [
    { name: "SK", city: "Pune" },
    { name: "PK", city: "Mumbai" },
    { name: "Anuja", city: "Pune" },
    { name: "Kanchan", city: "Pimpri" },
    { name: "Mamata", city: "Pune" },
    { name: "Sanjay", city: "Pune" },
    { name: "SK", city: "Mumbai" },
]

var new_data = data.map(function(item, i) {
    return { name: item.name, city: item.city, age: 20 + i }
});

function showTable() {
    var table_ele = document.getElementById("data_table");
    var table_data = "<tr> <th>Name</th> <th>City</th> <th>Age</th> </tr>";

    new_data.forEach(function(item) {
        table_data = table_data +
            `<tr>
            <td> ${item.name} </td>
            <td> ${item.city} </td>
            <td> ${item.age} </td>
        </tr>
       `
    });
    table_ele.innerHTML = table_data;
}

function sortByName() {
    new_data.sort(function(next, current) { return next.name.localeCompare(current.name) })

    showTable();
}

function sortByAge() {
    new_data.sort(function(next, current) { return next.age - current.age })

    showTable();
}

function searchByName() {

    var table_ele = document.getElementById("data_table");
    var search_ele = document.getElementById("search_input");
    if (search_ele.value == "") {
        alert("enter value");
        return true;
    }
    var search_result = new_data.filter(function(val) { return val.name == search_ele.value });
    console.log("running");
    console.log(search_result);
    var table_data = "<tr> <th>Name</th> <th>City</th> <th>Age</th> </tr>";

    search_result.forEach(function(item) {
        table_data = table_data +
            `<tr>
            <td> ${item.name} </td>
            <td> ${item.city} </td>
            <td> ${item.age} </td>
        </tr>
       `
    });
    table_ele.innerHTML = table_data;
}

function showOnlyTop_3() {
    var top_three = new_data.slice(0, 3);

    var table_ele = document.getElementById("data_table");
    var table_data = "<tr> <th>Name</th> <th>City</th> <th>Age</th> </tr>";

    top_three.forEach(function(item) {
        table_data = table_data +
            `<tr>
            <td> ${item.name} </td>
            <td> ${item.city} </td>
            <td> ${item.age} </td>
        </tr>
       `
    });
    table_ele.innerHTML = table_data;
}

function removeFirst() {
    var remove_first_val = new_data.shift();

    showTable();
}

function addBg() {
    var table = document.getElementById("data_table");
    table.classList.add("bg-secondary");
}

function changeBg() {
    var tbl = document.getElementById("data_table");
    tbl.classList.toggle("bg-warning");

}

function changeBtnColor() {
    var btn = document.querySelectorAll("button");
    btn[7].classList.remove("bg-primary");
    btn[7].classList.add("bg-danger");
}