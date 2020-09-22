//Shopping Website which has search and price filter,add to cart and remove from cart,number of items in the cart
let products = [
    {
      id: 1,
      name: "Red Kurti",
      size: "L",
      color: "Red",
      price: 1200,
      image: "product1.jpg",
      description: "Good looking Red Kurti",
    },
    {
      id: 2,
      name: "Dark red kurti",
      size: "M",
      color: "Dark red",
      price: 1500,
      image: "product2.jpg",
      description: "Good looking Dark Red Kurti",
    },
  
    {
      id: 3,
      name: "Floral Kurti",
      size: "S",
      color: "White & Pink",
      price: 900,
      image: "product3.jpg",
      description: "Good looking Floral Kurti",
    },
  
    {
      id: 4,
      name: "Yellow Kurti",
      size: "M",
      color: "Yellow",
      price: 3000,
      image: "product4.jpg",
      description: "Beautifull Kurti",
    },
  
    {
      id: 5,
      name: "Grey Chudi",
      size: "S",
      color: "Grey",
      price: 1300,
      image: "product5.jpg",
      description: "Good looking Top",
    },
  
    {
      id: 6,
      name: "White Gown",
      size: "M",
      color: "White",
      price: 1500,
      image: "product6.jpg",
      description: "Good looking White Gown",
    },
    {
        id: 7,
        name: "Black Shirt",
        size: "M",
        color: "Black",
        price: 1700,
        image: "product7.jpg",
        description: "Good looking Black Shirt",
    },
    {
        id: 8,
        name: "Blue Shirt",
        size: "M",
        color: "Blue",
        price: 2000,
        image: "product8.jpg",
        description: "Good looking Blue Shirt",
    },
    {
        id: 9,
        name: "Brown Shirt",
        size: "S",
        color: "Brown",
        price: 2500,
        image: "product9.jpg",
        description: "Good looking Brown Shirt",
    },
    {
        id: 10,
        name: "Sandal Dress",
        size: "L",
        color: "Sandal",
        price: 4500,
        image: "product10.jpg",
        description: "Good looking Traditional Dress",
    },
    {
        id: 11,
        name: "Checked Dress",
        size: "M",
        color: "Blue & red",
        price: 3200,
        image: "product11.png",
        description: "Good looking Traditional Dress",
    },
    {
        id: 12,
        name: "Double Color Hoodie",
        size: "L",
        color: "Black & red",
        price: 3500,
        image: "product12.jpeg",
        description: "Good looking Traditional Dress",
    },
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" height="auto" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" height="auto"/>
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
      
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  function searchMinMaxProduct(searchValue){
      let min=document.getElementById("price").value;
      let max=document.getElementById("price1").value;
      let searchedminmaxproducts=products.filter(function(product){
           return product.price>=min && product.price<=max;
      });
     
      displayProducts(searchedminmaxproducts);
    
  }
  
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  function addToCart(id) {

    let pro = getProductByID(products, id);
    cart.push(pro);
    document.getElementById("count").value=cart.length;
    for(let i=0;i<cart.length;i++){
        for(let j=i+1;j<cart.length;j++)
        {
            if(cart[i]==cart[j])
            {
               window.alert("Already added to the Cart");
               cart.pop(pro);
               document.getElementById("count").value=cart.length;
            }
            
        }
    }
    displayProducts(cart,"cart")
}
  
  //displayProducts(cart, "cart");
  function removeFromCart(id) {
     let index = cart.findIndex(function (product) {
      return product.id == id;
    });
    cart.splice(index, 1);
    document.getElementById("count").value=cart.length;
    displayProducts(cart, "cart");
  }

  
  
   
  
  