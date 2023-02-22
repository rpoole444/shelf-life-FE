export const cleanBookData = (book) => {
    return  {
      id: book.id,
      isbn: book.isbn,
      title: book.title,
      description: book.description,
      amazon_link: book['amazon_link'],
      book_image: book['book_image'],
      recomended_by: book['recomended_by'],
      author: book.author,
      isFavorited: book.isFavorited
    } 
  }