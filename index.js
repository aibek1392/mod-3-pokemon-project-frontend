let dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#193694";
// dodger.style.backgroundColor = "#FF69B4";
dodger.style.height = "50px"
dodger.style.bottom = "100px";
dodger.style.left;  "180px";
dodger.style.up;  "100px";
dodger.style.down;  "180px";


function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
})
// ---------------
function moveDodgerRight() {
    let rightNumbers = dodger.style.right.replace("px", "");
    let right = parseInt(rightNumbers, 10);
  
    if (right < 0) {
      dodger.style.right = `${right + 8}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
})

document.addEventListener("keydown", function(e) {
    //   debugger
    if (e.key === "ArrowRight") {
      let rightNumbers = dodger.style.left.replace("px", "");
      let right = parseInt(rightNumbers, 10);
  
      dodger.style.left = `${right + 8}px`;
    }
})





function moveDodgerUp() {
    let topNunber = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(topNunber, 10);
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom + 8}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
      moveDodgerUp();
    }
})

function moveDodgerDown() {
    let topNunber = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(topNunber, 10);
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 8}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
      moveDodgerDown();
    }
})

























// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let trainerDisplayDiv = document.querySelector(".box") 
let wildPokemonDisplayDiv = document.querySelector(".box2")
let loginForm = document.querySelector(".modal-content.animate")
let fightButton = document.createElement("button")
let newArr = []
let allPokemonDiv = document.querySelector(".flex")
let trainer = {}
let allPokemonDiv1 = document.querySelector(".flex")

// let pokemonId = ""
// let id = ""

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // let userInput =  e.target.uname.value
  
  fetch("http://localhost:3000/trainers")
  .then(r => r.json())
  .then(allUsers => {
    // debugger
    let userInput =  e.target.uname.value
    allUsers.forEach(users => {
      let bool = users.username.includes(userInput)
      
      if (bool){
        let id = users.id
        // debugger

        trainerDisplayDiv.innerHTML = ""
       trainerDisplayDiv.innerHTML += `<center><p data-id="${users.id}">Trainer: ${users.username}</p></center>`  
       
              fetch(`http://localhost:3000/trainers/${id}`)
              .then(r => r.json())
              .then(usersArr => {



                usersArr.pokeballs.forEach(pokeball => {//
                  // debugger
                  let pokemonImg = document.createElement("img")
                  pokemonImg.src = pokeball.pokemon.image
                  pokemonImg.setAttribute("id", `${pokeball.id}`)//
                  allPokemonDiv.append(pokemonImg)
                })





              })
              document.addEventListener("keyup", event => {

                let num =(Math.random() * 5)
                if (event.key === "ArrowUp") {     
              
                    let pokemonId = Math.floor((Math.random() * 84) + 1)
              
                    fetch(`http://localhost:3000/pokemons/${pokemonId}`)
                    .then(r => r.json())
                    .then(response => {
              
              
                        wildPokemonDisplayDiv.innerHTML = ""
                        wildPokemonDisplayDiv.innerHTML += `<center><p>A wild pokemon: <h4>${response.name}</h4></p></center>
                        <center><img class="pokemon-image-class" data-id="${response.id}" src="${response.image}"></center>
                        <center><p> ${response.description}</p></center>
                        <button style="background-color:black" class="fight" id="pokemon-catch">Catch</button>
                          `
                    })             
                  
                } else {
                  wildPokemonDisplayDiv.innerHTML = ""
                  
                }
                // do something


                // let catchButton = document.getElementById("pokemon-catch")
                // catchButton.addEventListener('click', (e) => {
                //   console.log("clicked")
                // })
              })
              
              
              document.addEventListener("keyup", event => {

                let num =(Math.random() * 5)
                if (event.key === "ArrowRight") {     
              
                    let pokemonId = Math.floor((Math.random() * 84) + 1)
              
                    fetch(`http://localhost:3000/pokemons/${pokemonId}`)
                    .then(r => r.json())
                    .then(response => {
              
              
                        wildPokemonDisplayDiv.innerHTML = ""
                        wildPokemonDisplayDiv.innerHTML += `<center><p>A wild pokemon: <h4>${response.name}</h4></p></center>
                        <center><img class="pokemon-image-class" data-id="${response.id}" src="${response.image}"></center>
                        <center><p> ${response.description}</p></center>
                        <button style="background-color:black" class="fight" id="pokemon-catch">Catch</button>
                          `
                    })             
                  
                } else {
                  wildPokemonDisplayDiv.innerHTML = ""
                  
                }
                // do something


                // let catchButton = document.getElementById("pokemon-catch")
                // catchButton.addEventListener('click', (e) => {
                //   console.log("clicked")
                // })
              })



              document.addEventListener("keyup", event => {

                let num =(Math.random() * 5)
                if (event.key === "ArrowLeft") {     
              
                    let pokemonId = Math.floor((Math.random() * 84) + 1)
              
                    fetch(`http://localhost:3000/pokemons/${pokemonId}`)
                    .then(r => r.json())
                    .then(response => {
              
              
                        wildPokemonDisplayDiv.innerHTML = ""
                        wildPokemonDisplayDiv.innerHTML += `<center><p>A wild pokemon: <h4>${response.name}</h4></p></center>
                        <center><img class="pokemon-image-class" data-id="${response.id}" src="${response.image}"></center>
                        <center><p> ${response.description}</p></center>
                        <button style="background-color:black" class="fight" id="pokemon-catch">Catch</button>
                          `
                    })             
                  
                } else {
                  wildPokemonDisplayDiv.innerHTML = ""
                  
                }
                // do something


                // let catchButton = document.getElementById("pokemon-catch")
                // catchButton.addEventListener('click', (e) => {
                //   console.log("clicked")
                // })
              })






              document.addEventListener("keyup", event => {

                let num =(Math.random() * 5)
                if (event.key === "ArrowDown") {     
              
                    let pokemonId = Math.floor((Math.random() * 84) + 1)
              
                    fetch(`http://localhost:3000/pokemons/${pokemonId}`)
                    .then(r => r.json())
                    .then(response => {
              
              
                        wildPokemonDisplayDiv.innerHTML = ""
                        wildPokemonDisplayDiv.innerHTML += `<center><p>A wild pokemon: <h4>${response.name}</h4></p></center>
                        <center><img class="pokemon-image-class" data-id="${response.id}" src="${response.image}"></center>
                        <center><p> ${response.description}</p></center>
                        <button style="background-color:black" class="fight" id="pokemon-catch">Catch</button>
                          `
                    })             
                  
                } else {
                  wildPokemonDisplayDiv.innerHTML = ""
                  
                }
                // do something


                // let catchButton = document.getElementById("pokemon-catch")
                // catchButton.addEventListener('click', (e) => {
                //   console.log("clicked")
                // })
              })















              
              // fetch("http://localhost:3000/pokeballs")
              // .then(r => r.json())
              // .then(pokeballs => {
              //   console.log(pokeballs)
              //   pokeballs.forEach(pokemon => {
              //     console.log(pokemon.pokemon)
              //   })
              // })
              
              // console.log(id)
      }
    })

  })
})


wildPokemonDisplayDiv.addEventListener("click", (e) => {
  if(e.target.className === "fight"){
    // debugger
    fetch(`http://localhost:3000/pokeballs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept":"application/json"
      },
      body: JSON.stringify({
        level: 3,
        pokemon_id: parseInt(document.querySelector(".box2").children[1].children[0].dataset.id),
        trainer_id: parseInt(document.querySelector(".box").firstElementChild.querySelector("p").dataset.id)
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(r => r.json())
    .then(pokemon => {
      console.log(pokemon)
      // debugger
      // debugger
      let allPokemonDiv1 = document.querySelector(".flex")
      allPokemonDiv1.innerHTML += `<img data-id="${pokemon.id}" src="${pokemon.pokemon.image}"/>
      `
      // break;

    })
    
  }
})
allPokemonDiv.addEventListener("click", (e) => {
  if(e.target.tagName === "IMG"){
    // debugger
    let imgID = e.target.id
    let pokeImage = e.target
    // debugger
    fetch(`http://localhost:3000/pokeballs/${imgID}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(response => {
      // debugger
      pokeImage.remove();

    })
  }
})

// let size = document.querySelector(".box2").childElementCount
// console.log(size);


    // let catchButton = document.querySelector(".box2").children[3]
      // catchButton.addEventListener('click', () => {
      // debugger
    // })


// Math.floor((Math.random() * 10) + 1);
// let catchButton = document.querySelector(".fight")
// catchButton.addEventListener('click', (e) => {
//   console.log("clicked")
  // debugger
  // console.log();
  // if(e.target.className === "fight"){
  //   debugger

  //   // allPokemonDiv.innerHTML += `<img data-id="${response.id}" src="${response.image}">`
  //   fetch(`http://localhost:3000/pokeballs`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       "accept":"application/json"
  //     },
  //     body: JSON.stringify({
  //       level: 3,
  //       pokemon_id: parseInt(e.target.parentElement.parentElement.children[1].querySelector("img").dataset.id),
  //       trainer_id: id
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //   .then(r => r.json())
  //   .then(pokeball => {
  //     console.log(pokemon)
  //     debugger
  //     let allPokemonDiv1 = document.querySelector(".flex")
  //     allPokemonDiv1.innerHTML += `<img data-id="${pokemon.pokemon.id}" src="${pokemon.pokemon.image}">`
  //     // break;
  //   })
    
  // }








//   // debugger
//   if(e.target.classList.contains("fight")){

//     // allPokemonThisGuyHas = ""

//     document.body.innerHTML = "" 
//     document.body.innerHTML += `<div><img src="/Users/alishah/Desktop/mod3finalproject/pokemon-frontend/pictures/18-180510_nature-flowers-garden-landscape-wallpapers-hd-flowers-garden.jpg" width=1000px"/>
//     <img id="bob" src="${response.image}">`
//     // document.body.innerHTML += `<div class="fight-option"><button>Back to Map</button></div>`


//     // let backButton = document.querySelector(".fight-option")
//     // backButton.addEventListener("click", (e) => {
     
//     // })






  
 

   
