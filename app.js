const wrapper =document.querySelector(".sliderWrapper");

const menuItems=document.querySelectorAll(".menuItem")

const products=[
    {
        id:1,
        title:"Air Jordan",
        price:199,
        colors:[
        {    
            code:"white",
            img:"./images/Air1.png",
        },
        {
          code:"black", 
          img:"./images/Air11.png",

        },
     ],  
    },

    {
        id:2,
        title:"Blazer",
        price:119,
        colors:[
        {    
            code:"lightgray",
            img:"./images/Air2.png",
        },
        {
          code:"green",
          img:"./images/Air22.png",

        },
     ],  
    },


    {
        id:3,
        title:"Crater",
        price:399,
        colors:[
        {    
            code:"black",
            img:"./images/Air3.png",
        },
        {
          code:"white",
          img:"./images/Air33.png",

        },
     ],  
    },

    {
        id:4,
        title:"Hippie",
        price:119,
        colors:[
        {    
            code:"red",
            img:"./images/Air4.png",
        },
        {
          code:"lightgray",
          img:"./images/Air44.png",

        },
     ],  
    },

    {
        id:5,
        title:"Kobe Brayant",
        price:219,
        colors:[
        {    
            code:"white",
            img:"./images/Air5.png",
        },
        {
          code:"yellow",
          img:"./images/Air55.png",

        },
     ],  
    },

    
];

let choosenProduct=products[0];
const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
   item.addEventListener("click",()=>{
    //changing the current slide
    wrapper.style.transform=`translateX(${-100*index}vw)`;

    //changing the choosen product
    choosenProduct=products[index]

    //change texts of current prodcts
    currentProductTitle.textContent=choosenProduct.title;
    currentProductPrice.textContent="$"+choosenProduct.price;
    currentProductImg.src=choosenProduct.colors[0].img;

    //for changing the colors of the shoes
    currentProductColors.forEach((color,index)=>{
      color.style.backgroundColor=choosenProduct.colors[index].code;
    })
   });
});

//for changing the images of the colurs of the shoes
currentProductColors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentProductImg.src=choosenProduct.colors[index].img
  })
})

//for sizes
currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="white";
      size.style.color="black";
    });
    size.style.backgroundColor="black";
    size.style.color="white";
  });
});

const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex";
});

close.addEventListener("click",()=>{
  payment.style.display="none";
})


