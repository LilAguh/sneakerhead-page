let url = 'https://snkr-findr.herokuapp.com/sneakers/'
let sneakers
let cardContainer = document.getElementById('cardContainer')

// fetch("./data.json")
//     .then((respuesta) => respuesta.json())
//     .then((datos) => sneakers = datos)
//     .catch((error) => console.log(error))

function printSneakers(sneakersToShow, container) {
    container.innerHTML = ''
    sneakersToShow.forEach(sneaker => {
        let card = document.createElement('div')
        card.className = `card`
        card.innerHTML =
            `
        <div class="datos">
        <img class="fotos" src=${sneaker.image_url}>
        </div>
        `
        container.appendChild(card)
    })
}

function fetchSneakers(URL, container) {
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            printSneakers(data, container);
        });
}

fetchSneakers(url, cardContainer)
