console.log('JS Connected')

// Elements
let movieForm = document.querySelector('form')
let message = document.querySelector('#message')

// Functions
const addMovie = (e) => {

    e.preventDefault()

    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    let movieList = document.querySelector('ul')

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)

    movieList.appendChild(movie)
    // console.log(inputField.value)



    inputField.value = ''
}

const deleteMovie = (e) => {
    e.target.parentNode.remove()
    message.textContent = 'Movie Deleted'
}

const crossOffMovie = (e) => {
    e.target.classList.toggle('checked')
    if(e.target.classList.contains('checked')){
        return message.textContent = 'Watched'
    } else {
        return message.textContent = 'Nevermind lol'
    }
}

// const revealMessage = () => {
//     setTimeout(())
// }


// Events
movieForm.addEventListener('submit', addMovie)

