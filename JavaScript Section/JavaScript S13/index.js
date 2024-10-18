


// fetch = Function usedfor making HTTP request to fetch resources. 
//         (JSON style data , image , files)
//          simp;ifies asynchronous data fetching in JavaScript and 
//          used for interactiong with APIs to receive and sent
//          data asynchronously over the web.
//         fetch(url, {option}) 
//         fetch(url, {method: "POST"}) 



// ------- Featch data
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => response.json())
// .then(data => console.log(data.id))
// .catch(error => console.error(error));


// ------- Featch data with an catch statement
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Could Fetch Resource");
//     }
//     return response.json();
// })
// .then(data => console.log(data.id))
// .catch(error => console.error(error));

// ------- Featch data with async


async function fetchData(){
    try{

        const pokemonName =document.getElementById("pokemonName").value.toLowerCase();
        const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not Fetch Data");
        }
        const data =await response.json();
        // console.log(data);

        const pokemonSprite =data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");


        imgElement.src =pokemonSprite;
        imgElement.style.display="block";










    }
    catch(error){
        console.error(error);
    }
}
fetchData();







