console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json();
    })
    .then(function(json){
    links = json.message
    const dogs = document.getElementById("dog-image-container")
    for(i of links){
        const dog = document.createElement("img")
        dog.src = i
        dogs.append(dog)
       
    }
});
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json)
        const breeds = json.message
        const breedList = document.getElementById("dog-breeds")
        for(i in breeds){
           const breed = document.createElement("li")
            breed.className = "breed"
            breed.innerHTML = i
            breedList.append(breed)
            breed.addEventListener('click', function(){ breed.style.color == "purple" ? breed.style.color = "black" : breed.style.color = "purple"})
        }
        drdn = document.getElementById("breed-dropdown")
        v = drdn.value
        drdn.addEventListener('change', e => {
            const dv = e.target.value
            breedList.innerHTML = ''
            for(i in breeds){
                if(i.startsWith(dv)){
                    const breed = document.createElement("li")
                    breed.className = "breed"
                    breed.innerHTML = i
                    breedList.append(breed)
                    breed.addEventListener('click', function(){ breed.style.color == "purple" ? breed.style.color = "black" : breed.style.color = "purple"}) 
                }
            }    
        })
        

    })

function createLi(){
        const breed = document.createElement("li")
        breed.className = "breed"
        breed.innerHTML = i
        breedList.append(breed)
        breed.addEventListener('click', function(){ breed.style.color == "purple" ? breed.style.color = "black" : breed.style.color = "purple"}) 
}

    
// function add(){
//     const breedLi = document.querySelectorAll(".breed")
//     for (b of breedLi){
//         b.addEventListener('click', function(){b.style.color = "purple"} )
//     }
// }
