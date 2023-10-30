export const reducer = (state, action) => {
    // action.type, action.payload

    if(action.type === 'ADD') {
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "Book is Added"
        }
    }

    if(action.type === 'REMOVE') {
        const filterBooks = [...state.books].filter((book) => book.id != action.payload)
        return {
            ...state,
            books: filterBooks,
            isModalOpen: true,
            modalText: "Book is Removed"
        }
    }
}