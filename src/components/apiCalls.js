export const apiCalls = {
    getAllBooks() {
        return fetch('http://localhost:3001/api/v1/books')
            .then(response => response.json())
    },
    getSingleBook(isbn){
        return fetch(`http://localhost:3001/api/v1/books/${isbn}`)
        .then(response => response.json())
    },
    getAllFavorites(){
        return fetch('http://localhost:3001/api/vi/favorites')
        .then(response => response.json())
    },
    addBookToFavorites(favoriteBook){
        return fetch('http://localhost:3001/api/vi/favorites', {
            method:'POST',
            body:JSON.stringify(favoriteBook),
            headers:{
                'Content-Type': 'aplication/json'
            }
        }).then(response => response.json())
    },
    deleteFromFavorites(id) {
        return fetch(`http://localhost:3001/api/v1/favorites/${id}`, { method: 'DELETE' })
          .then(response => response.json())
      } 
}
