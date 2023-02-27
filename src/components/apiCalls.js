import { handleResponse } from './utilities'
export const apiCalls = {
    getAllBooks() {
        return fetch('https://shelf-life-db.herokuapp.com/api/v1/books')
            .then(response => handleResponse(response))
    },
    getSingleBook(isbn){
        return fetch(`https://shelf-life-db.herokuapp.com/api/v1/books/${isbn}`)
            .then(response => handleResponse(response))
    },
    getAllFavorites(){
        return fetch('https://shelf-life-db.herokuapp.com/api/v1/favorites')
            .then(response => handleResponse(response))
    },
    addBookToFavorites(favoriteBook){
        return fetch('https://shelf-life-db.herokuapp.com/api/v1/favorites', {
            method:'POST',
            body:JSON.stringify(favoriteBook),
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(response => handleResponse(response))
    },
    deleteFromFavorites(id) {
        return fetch(`https://shelf-life-db.herokuapp.com/api/v1/favorites/${id}`, { method: 'DELETE' })
            .then(response => handleResponse(response))
      },
    updateFavStatus(selectedBook) {
        return fetch(`https://shelf-life-db.herokuapp.com/api/v1/books/${selectedBook.isbn}`, {
          method: 'PATCH',
          body: JSON.stringify({isFavorited: !(selectedBook.isFavorited === 'true')}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
            .then(response => handleResponse(response))
    }
}
