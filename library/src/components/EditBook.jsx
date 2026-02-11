import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBook() {
    const {bookId} = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const [genre, setGenre] = useState('');
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get('https://worksheet-library.mashupstack.com/books/'+bookId).then(response=>{
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setPublishedYear(response.data.published_year);
            setGenre(response.data.genre);
        })
    },[bookId]);
    function updateBook(){
        axios.put('https://worksheet-library.mashupstack.com/books/'+bookId,{
            title: title,
            author: author,
            published_year: publishedYear,
            genre: genre
        }).then(response=>{
            alert(response.data.message)
        })
        navigate('/books');
    }
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Edit Book</h1>
                    <div className="form-group">
                        <label>Title:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={title} 
                        onChange={(event)=>{setTitle(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={author} 
                        onChange={(event)=>{setAuthor(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Published Year:</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        value={publishedYear} 
                        onChange={(event)=>{setPublishedYear(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Genre:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={genre} 
                        onChange={(event)=>{setGenre(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={updateBook}>Submit</button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}

export default EditBook;