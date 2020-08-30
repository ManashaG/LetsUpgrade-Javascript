// 1.Program to search for a particular character in a string
var string="Hello World";
console.log(string.search('o'));
console.log(string.search('W'));

//2.Program to convert minutes to seconds
var min=120;
var sec=120*60;
var m=`${min} minutes is ${sec} seconds`;
console.log(m);

//3.Program to search for a element in a array of strings
var str=["hi","hello","hallo","hey"];
var value="hey";
var f=0;
for(let i=0;i<str.length;i++){
    if(str[i]==value){
        f=1
    }
}
if (f==1){
    console.log("String is present");
}
else{
    console.log("String is not present");
}

//4.Program to display only elements containing 'a' in them from a array
var elements=["apple","orange","kiwi","jackfruit"];
for(let i=0;i<elements.length;i++){
    if (elements[i].includes('a')){
        console.log(elements[i]);
    }
    else{
        continue;
    }
}

//5.Print an array in reverse order 
var arr=["10","20","30","40","50"];
for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}
