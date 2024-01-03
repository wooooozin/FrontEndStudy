
import axios from "axios"

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=api&s=frozen')
    .then((res) => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[1].Title
      imgEl.src = res.data.Search[1].Poster
    })
}

fetchMovies()