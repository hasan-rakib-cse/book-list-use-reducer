import React, { useReducer, useState } from 'react'
import { reducer } from './Reducer';

const booksData = [
    {id: 1, name: "Pathar Panchal"},
    {id: 2, name: "Padma Nodir Majhi"},
    {id: 3, name: "Jomidar Darpan"}
];

const Modal = ({modalText}) => {
    return <p>{modalText}</p>
};


const UseReducer = () => {

    const initialState = {
        books: booksData,
        isModalOpen: false,
        modalText: ''
    }
    
    const [bookState, dispatch] = useReducer(reducer, initialState)
    const [bookName, setBookName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {id: new Date().getTime().toString(), name: bookName}
        dispatch({
            type: 'ADD',
            payload: newBook
        });
        setBookName('')
    }

    const removeBook = (id) => {
        dispatch({
            type: 'REMOVE',
            payload: id
        });
    }

  return (
    <div>
        <h2>Book List</h2>

        <form onSubmit={handleSubmit}>
            <input type='text' id='bookname' value={bookName} placeholder='enter book name' onChange={(book) => {setBookName(book.target.value)}} />
            <button type='submit'>Add New Book</button>
        </form>

        {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

        {bookState.books.map((book) => {
            const {id, name} = book;
            return (
                <div style={{display: 'flex', gap: '10px', margin: '10px 0'}}>
                    <li key={id}>{name}</li> <button onClick={() => {removeBook(id)}}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}

export default UseReducer