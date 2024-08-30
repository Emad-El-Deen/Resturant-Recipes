// let allRecipes = [];
// function getSteak(callBack) {
//   let x = new XMLHttpRequest();
//   x.open("GET", "https://forkify-api.herokuapp.com/api/search?q=steak");
//   x.send();
//   x.addEventListener("readystatechange", function () {
//     if (this.readyState == 4) {
//       allRecipes = JSON.parse(x.response).recipes;
//       console.log(allRecipes);
//       console.log("steak");
//       // callBack();
//       display();
//     }
//   });
// }
// getSteak();

// /*------------------------xmlHttpRequest------------------------*/

// function display() {
//   let table = ``;
//   for (let i = 0; i < allRecipes.length; i++) {
//     table += `
//       <div class="g-5 text-white col-md-3">
//         <div class="bg-secondary py-3 rounded">
//         <h2 class="h6 py-3 text-center">${allRecipes[i].title}</h2>
//         <img class="img-fluid rounded" src="${allRecipes[i].image_url}" alt="">
//         <a class="text-decoration-none  text-dark" href="${allRecipes[i].publisher_url}"> <h4 class="h6 text-white py-3 text-center">${allRecipes[i].publisher}</h4> </a>
//         <a class="text-decoration-none   text-dark" href="${allRecipes[i].publisher_url}"> <h4 class="h6 py-3 bg-light mx-5 text-center">Source Recipes</h4> </a>
//         </div>

//       </div>

//   `;
//   }
//   document.getElementById("rowData").innerHTML = table;
// }

// syncrounous
// Asyncrounous

// let allRecipes = [];
// function getSteak() {
//   let x = new XMLHttpRequest();
//   x.open(
//     "GET",
//     "https://forkify-api.herokuapp.com/api/search?q=steak"
//   );
//   x.send();
//   x.addEventListener("readystatechange", function () {
//     if (x.readyState == 4) {
//       allRecipes = JSON.parse(x.response).recipes;

//       display();
//     }
//   });
// }
// getSteak();

// function display() {
//   let table=``;
//   for (let i = 0; i < allRecipes.length; i++) {
//     table += `
//        <div class="g-5 text-white col-md-3">
//          <div class="bg-secondary py-3 rounded">
//          <h2 class="h6 py-3 text-center">${allRecipes[i].title}</h2>
//          <img class="img-fluid rounded" src="${allRecipes[i].image_url}" alt="">
//          <a class="text-decoration-none  text-dark" href="${allRecipes[i].publisher_url}"> <h4 class="h6 text-white py-3 text-center">${allRecipes[i].publisher}</h4> </a>
//          <a class="text-decoration-none   text-dark" href="${allRecipes[i].publisher_url}"> <h4 class="h6 py-3 bg-light mx-5 text-center">Source Recipes</h4> </a>
//          </div>

//        </div>

//    `;
//   }
// document.getElementById("rowData").innerHTML = table;
// }

// -------------------xmlHttpRequest----------------------

// function getSteak(callBack) {
//   let allRecipes = [];
//   let x = new XMLHttpRequest();
//   x.open("GET", "https://forkify-api.herokuapp.com/api/search?q=steak");
//   x.send();
//   x.addEventListener("readystatechange", function () {
//     if (x.readyState == 4) {
//       allRecipes = JSON.parse(x.response).recipes;
//       callBack();
//       console.log("steak");
//     }
//   });
// }
// function getPizza(callBack) {
//   let allRecipes = [];
//   let x = new XMLHttpRequest();
//   x.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza");
//   x.send();
//   x.addEventListener("readystatechange", function () {
//     if (x.readyState == 4) {
//       allRecipes = JSON.parse(x.response).recipes;
//       callBack();
//       console.log("pizza");
//     }
//   });
// }
// function getpasta(callBack) {
//   let allRecipes = [];
//   let x = new XMLHttpRequest();
//   x.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pasta");
//   x.send();
//   x.addEventListener("readystatechange", function () {
//     if (x.readyState == 4) {
//       allRecipes = JSON.parse(x.response).recipes;
//       callBack();
//       console.log("pasta");
//     }
//   });
// }
// function allDone() {
//   console.log("allDone");
// }
// getSteak(function() {
//   getPizza(function () {
//     getpasta(function () {
//       allDone()
//     })
//   })
// })
// -------------------------------------------------------------

// --------------------------promise api------------------------------
// function getSteak() {
//   let allRecipes = [];
//   return new Promise(function (resolved, rejected) {
//     let x=new XMLHttpRequest();
//     x.open("GET", "https://forkify-api.herokuapp.com/api/search?q=steak");
//     x.send();
//     x.addEventListener("load", function () {
//       allRecipes = JSON.parse(x.response).recipes;
//       console.log("steak");
//       resolved();
//     });
//     x.addEventListener("error", function () {
//       rejected("Error in getting steak recipes.");
//     });
//   });
// }
// function getPizza() {
//   let allRecipes = [];
//   return new Promise(function (resolved, rejected) {
//     let x=new XMLHttpRequest();
//     x.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza");
//     x.send();
//     x.addEventListener("load", function () {
//       allRecipes = JSON.parse(x.response).recipes;
//       console.log("pizza");
//       resolved();
//     });
//     x.addEventListener("error", function () {
//       rejected("Error in getting pizza recipes.");
//     });
//   });
// }
// function getpasta() {
//   let allRecipes = [];
//   return new Promise(function (resolved, rejected) {
//     let x=new XMLHttpRequest();
//     x.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pasta");
//     x.send();
//     x.addEventListener("load", function () {
//       allRecipes = JSON.parse(x.response).recipes;
//       console.log("pasta");
//       resolved();
//     });
//     x.addEventListener("error", function () {
//       rejected("Error in getting pasta recipes.");
//     });
//   });
// }

// function getSalad() {
//   let allRecipes=[];
//   return new Promise(function(resolved,rejected){
//     let x=new XMLHttpRequest();
//     x.open("GET","https://forkify-api.herokuapp.com/api/search?q=pizza");
//     x.send()
//     x.addEventListener('load',function () {
//     allRecipes=JSON.parse(x.response).recipes;
//     console.log("salad");
//     resolved();
//     })
//     x.addEventListener("error",function () {
//       rejected("Error in getting salad recipes.");
//     })
//   })
// }

// getPizza()
// .then(function(){return getSalad()})
// .then(function(){return getSteak()})
// .then(function(){return getpasta()})
// .catch(function(errMessage){console.log(errMessage);})
// .finally(function () {
//   console.log("done");
// })

// function getpastaa(){
//   let allRecipes=[];
//   return new Promise(function(resolved,rejected){
//     let x=new XMLHttpRequest();
//     x.open("GET","https://forkify-api.herokuapp.com/api/search?q=pizza");
//     x.send();
//     x.addEventListener('load',function(){
//       allRecipes=JSON.parse(x.response).recipes;
//       console.log("pizzaa");
//       resolved();
//     })
//     x.addEventListener('error',function(){
//       rejected("Error in getting salad recipes.");

//     })
//   })
// }
// ----------------------------------------------------------
// -------------------------fetch api---------------------------------

// function getPasta() {
//   fetch("https://forkify-api.herokuapp.com/api/search?q=pasta")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data.recipes);
//     });
// }

let allRecipes = [];
async function getRecipes(recipe) {
  try {
    let myHttp = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${recipe}`,
      { cache: "reload" }
    );
    let finalData = await myHttp.json();
    allRecipes = finalData.recipes ;
    display();
  } catch (error) {
    document.getElementById(
      "rowData"
    ).innerHTML = ` <div class="alert alert-danger"><h2 class="h6 py-3 text-center">${error}</h2>`;
  }
}

// let allRecipes=[];
// async function getRecipes(recipe) {

//  try{
//   let x=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`,{cache:"reload"})
//  let finalData= await x.json();
//  allRecipes=finalData.recipes;
//  display();
//  }catch(error){
// document.getElementById("rowData").innerHTML = ` <div class="alert alert-danger"><h2 class="h6 py-3 text-center">${error}</h2>`;

//  }
// }

function display() {
  let table = ``;
  for (let i = 0; i < allRecipes.length; i++) {
    table += `
       <div class="g-5 text-white col-md-3">
         <div class="bg-secondary py-3 rounded">
         <h2 class="h6 py-3 text-center">${allRecipes[i].title}</h2>
         <img class="img-fluid rounded" src="${allRecipes[i].image_url}" alt="">
         <a class="text-decoration-none  text-dark" href="${allRecipes[i].publisher_url}"> <h4 class="h6 text-white py-3 text-center">${allRecipes[i].publisher}</h4> </a>
         <a class="text-decoration-none   text-dark" href="${allRecipes[i].publisher_url}"> <h4 class="h6 py-3 bg-light mx-5 text-center">Source Recipes</h4> </a>
         </div>

       </div>

   `;
  }
  document.getElementById("rowData").innerHTML = table;
}
getRecipes(`pasta`);
