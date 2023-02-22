export const apiCalls = {
    gitAllBooks() {
        return fetch()
            .then(response => response.json())
    },
    gitSingleBook(isbn){
        return fetch()
        .then(response => response.json())
    },
    getAllFavorites(){
        return fetch()
        .then(response => response.json())
    },
    addBookToFavorites(favoriteBook){
        return fetch( url, {
            method:'POST',
            body:JSON.stringify(favoriteBook),
            headers:{
                'Content-Type': 'aplication/json'
            }
        }).then(response => response.json())
    },
    deleteFromFavorites(isbn){
        return fetch( url, { method: 'DELETE'})
        .then(response => response.json())
    }
}
//add update faverite status to change the json.stringafy isFavorited property to true or false