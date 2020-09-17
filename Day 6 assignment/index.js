//1)Create an array containing five objects with properties{name,age,city,salary}
//   A.Display all the objects in a table
//   B.Create a search functionality for name and city
//   C.Delete button to delete records 
//   D.Data is not permanent 
let persons=[
    {
        name:"Ram",
        age:20,
        city:"Chennai",
        salary:25000,
    },
    {
        name:"Sam",
        age:24,
        city:"Bangalore",
        salary:35000,
    },
    {
        name:"Gokul",
        age:28,
        city:"Mumbai",
        salary:40000,
    },
];
function display(superarray,index){
    let tabledata="";
    superarray.forEach(function(person){
        let currentrow=`<tr>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
        <td>${person.salary}</td>
        <td><button onclick='deleterow(${index})'>Delete</button></td>
        </tr>`;
        tabledata+=currentrow;
    });
    document.getElementsByClassName("tbody")[0].innerHTML=tabledata;
    
}
display(persons);

function search(){
    let searchValue=document.getElementsByClassName("inp")[0].value;
    let newdata=persons.filter(function(person){
       return((person.name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1)||
       (person.city.toUpperCase().indexOf(searchValue.toUpperCase())!=-1));
    });
    display(newdata);
}

function deleterow(index){
    persons.splice(index,1);
    display(persons);
}

//2)Create a blank array and later on create a add bus functionality bus object contains{name,source,
//destination,number,passenger capacity}
//     A.A form to add new bus 
//     B.Display data in table format
//     C.Search by source and destination
//     D.Data should be stored permanently in localstorage
window.onload=function(){
    let initialbuses=[];
    if(localStorage.getItem("buses")==null){
        localStorage.setItem("buses",JSON.stringify(initialbuses));
    }
};
function display1(superarray=undefined){
    let tabledata = "";
    let buses;
    if (superarray == undefined) {
        buses = JSON.parse(localStorage.getItem("buses"));
    } 
    else {
        buses = superarray;
    }

    buses.forEach(function (bus) {
    let currentrow = `<tr>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.number}</td>
        <td>${bus.passengercapacity}</td>
        </tr>`;

    tabledata += currentrow;
  });

    document.getElementsByClassName("t2")[0].innerHTML = tabledata;

}
display1();

function addbus(event){
    event.preventDefault();
    let bus= {};
    let name = document.getElementById("name").value;
    let source= document.getElementById("source").value;
    let destination= document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let passengercapacity=document.getElementById("passenger capacity").value;

    bus.name=name;
    bus.source=source;
    bus.destination=destination;
    bus.number=number;
    bus.passengercapacity=passengercapacity;

    let buses=JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses",JSON.stringify(buses));
    display1();
    document.getElementById("name").value="";
    document.getElementById("source").value="";
    document.getElementById("destination").value="";
    document.getElementById("number").value="";
    document.getElementById("passenger capacity").value="";
}
function search1(){
    let searchValue1=document.getElementById("search").value;
    let buses=JSON.parse(localStorage.getItem("buses")); 
    let newdata1=buses.filter(function(bus){
        return((bus.source.toUpperCase().indexOf(searchValue1.toUpperCase())!=-1)||
       (bus.destination.toUpperCase().indexOf(searchValue1.toUpperCase())!=-1));
    });
    display1(newdata1);
}


