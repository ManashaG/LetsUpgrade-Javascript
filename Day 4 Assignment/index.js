//1.A.On click of the second button a change of the existing image to a new image 
//  B.On click of the third button change to once again 
//  C.On click of first image should come back
function first(){
    const ele=document.getElementsByClassName("image");
    ele[0].src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pia13123-hires-1591453518.jpg";
}
function changeFirsttosecond(){
    
    const ele=document.getElementsByClassName("image");
    ele[0].src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hyades.jpg/1200px-Hyades.jpg";
}
function changeSecondtothird(){
    const ele=document.getElementsByClassName("image");
    ele[0].src="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/g9a9m-MHM425BWQ9F-Full-Image_GalleryBackground-en-US-1521579412582._SX1080_.jpg";
}

//2.A.Write Something in the first input 
//  B.On click of the button the content of input one should be copied in the second input 
function copyContent(){
    const ele=document.getElementsByClassName("inp");
    ele[1].value=ele[0].value; 
}

//3. Create an array of objects with objects having the following properties
//  A.{name(string),age(number),country(string),hobbies array(string[])}
//  B.Write a function to display all the objects of the console

let stars=[
    {
        name:"Ram",
        age:20,
        country:"India",
        hobbies:["reading","cooking","gardening"]
    },
    {
        name:"Sam",
        age:22,
        country:"USA",
        hobbies:["writing","playing","walking"]
    },
    {
        name:"Sonu",
        age:35,
        country:"India",
        hobbies:["singing","dancing","drawing"]
    },
];
function displayObjects(){
    for(let i=0;i<stars.length;i++){
        console.log(stars[i]);
    }
}
displayObjects();

//4.Following third question
//  A.Write a function to display all the objects having age less than 30
//  B.Write a function to dispaly all the objects having country India 
function age(){
    for(let i=0;i<stars.length;i++){
        if((stars[i].age)<30){
            console.log(stars[i]);
        }
    }
}
age();

function country(){
    for(let i=0;i<stars.length;i++){
        if((stars[i].country=="India")){
            console.log(stars[i]);
        }
    }
}
country();