// // // // console.log(Redux);

// // // // // Constant

// // // // const withdraw = "WITHDRAW_MONEY";
// // // // const diposet = "DIPOSET_MONEY";
// // // // const addProduct = "ADD_PRODUCT";

// // // // const WITHDRAW = (amount) => {
// // // //   return {
// // // //     type: withdraw,
// // // //     payload: amount,
// // // //   };
// // // // };

// // // // const Diposet = (amount) => {
// // // //   return {
// // // //     type: diposet,
// // // //     payload: amount,
// // // //   };
// // // // };

// // // // const addproducts = (amount) => {
// // // //   return {
// // // //     type: addProduct,
// // // //     payload: amount,
// // // //   };
// // // // };

// // // // const bankReducer = (state = 1000, action) => {
// // // //   switch (action.type) {
// // // //     case withdraw:
// // // //       return state - action.payload;
// // // //     case diposet:
// // // //       return state + action.payload;
// // // //     default:
// // // //       return state;
// // // //   }
// // // // };

// // // // const productReducer = (state = [], action) => {
// // // //   switch (action.type) {
// // // //     case addProduct:
// // // //       return [...state, action.payload];
// // // //     default:
// // // //       return state;
// // // //   }
// // // // };

// // // // const appReducer = Redux.combineReducers({
// // // //   bank: bankReducer,
// // // //   product: productReducer,
// // // // });

// // // // const store = Redux.createStore(appReducer);

// // // // console.log(store.getState());

// // // // let amount = document.querySelector("#amount");
// // // // let amountValue = document.querySelector("#value");
// // // // amountValue.innerHTML = store.getState().bank;
// // // // document.querySelector("#withdraw").addEventListener("click", () => {
// // // //   store.dispatch(WITHDRAW(+amount.value));
// // // // });
// // // // document.querySelector("#deposite").addEventListener("click", () => {
// // // //   store.dispatch(Diposet(+amount.value));
// // // // });

// // // // store.subscribe(() => {
// // // //   amountValue.innerHTML = store.getState().bank;
// // // // });

// // // var btn = document.querySelector("#btn");
// // // var div = document.querySelector(".test");

// // // // btn.addEventListener("click", () => {
// // // //   div.innerHTML = "Ahmed";
// // // // });

// // // function test(){
// // //   div.innerHTML = "solom"
// // // }
// // // btn.onclick = test


// // var allProducts = document.querySelectorAll(".list li")
// // var content = document.querySelector("#content")
// // var btn = document.querySelector("#btn")
// // var totlaPrice = 0


// // allProducts.forEach((element) => {
// //   element.onclick = function(){
// //     content.innerHTML += element.textContent + "//"
// //     totlaPrice += +(element.getAttribute("price"))
// //     if(content.innerHTML !== ""){
// //       btn.style.display = "block"
// //     }
// //   }
// // })
// // // btn.addEventListener("click", () => {
// // //   console.log(totlaPrice);
// // // })

// // btn.onclick = function(){
// //   console.log(totlaPrice);
// // }

// let div = document.getElementById("div")


// let data = [
//   {
//     name:"Ahmed",
//     age:21,
//     city:"Cairo"
//   },
//   {
//     name:"Amr",
//     age:35,
//     city:"Mansoura"
//   },
//   {
//     name:"Sameh",
//     age:28,
//     city:"Egypt"
//   },
// ]

// // let newData = JSON.stringify(data)
// // div.innerHTML = newData

// // function database() {
// //   var xhttp = new XMLHttpRequest()
// //   console.log(xhttp);
// // }
// // database()


// function loadData(){
//   var xhttp = new XMLHttpRequest()

//   xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//       console.log(JSON.parse(this.responseText));
//     }
//   }
//   xhttp.open( "GET","https://jsonplaceholder.typicode.com/posts", false )
//   xhttp.send()
// }
// loadData()

// let productInput = document.querySelector("#productInput")
// let productBtn = document.querySelector("#productBtn")
// let productContainer = document.querySelector("#productContainer")


var imgs = document.querySelectorAll(".row img")
var aboveBox = document.querySelector(".above-box")
var item = document.querySelector(".item")
var closeBox = document.getElementById("cBox")
var prev = document.getElementById("prev")
var next = document.getElementById("next")
var imgsArray = [];
var currentIndex = 0;
for(i = 0 ; i < imgs.length ; i++){
  imgsArray.push(imgs[i])
  imgs[i].addEventListener("click" , (e) => {
    aboveBox.classList.add("visible")
    var imgSrc = e.target.src;
    item.style.backgroundImage = `url(${imgSrc})`
    currentIndex = imgsArray.indexOf(e.target)
    console.log(currentIndex);
  })
}



// close Box
closeBox.addEventListener("click" , () => {
  aboveBox.classList.remove("visible")
})

// prev & next Aroows

next.addEventListener("click" , () =>{
  currentIndex++;
  item.style.backgroundImage = `url(${imgsArray[currentIndex].src})`
  if (currentIndex == imgsArray.length) {
    currentIndex = 0
  }
})
prev.addEventListener("click" , () =>{
  currentIndex--;
  if(currentIndex < 0){
    currentIndex = imgsArray.length -1
  }
  item.style.backgroundImage = `url(${imgsArray[currentIndex].src})`
})