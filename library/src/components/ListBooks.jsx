import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookListItem from "./BookListItem";

function ListBooks() {
    var [books, setBooks]=useState([]);
    function fetchBooks(){
        axios.get('https://worksheet-library.mashupstack.com/books')
        .then(response=>{
            setBooks(response.data)
        })
    }
    useEffect(()=>{
        fetchBooks()
    },[])

    return (<div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-4">Library</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <Link to="/books/create" className="btn btn-info mb-2">Create Book</Link>
                    {books.map(book =><BookListItem key={book.id} book={book} refresh={fetchBooks}/>)}
                </div>
            </div>
        </div>
    </div>)
}

export default ListBooks;



