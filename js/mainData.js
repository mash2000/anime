const mainData = () => {
  fetch('https://anime-dd1ff-default-rtdb.firebaseio.com/anime.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data);
    })
}

mainData()