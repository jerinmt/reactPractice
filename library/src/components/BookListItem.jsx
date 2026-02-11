import axios from "axios";
import { Link } from "react-router-dom";

function BookListItem(props) {
    function deleteBook() {
        axios.delete('https://worksheet-library.mashupstack.com/books/'+props.book.id).then(response=>{
            alert(response.data.message)
            props.refresh()
        })
    }
    return <div className="card">
    <div className="card-body">
        {props.book.title} - {props.book.author} ({props.book.published_year}) - {props.book.genre}
        <button className="btn btn-primary float-right" onClick={deleteBook}>Delete</button>
        <Link to={"/books/"+props.book.id+"/edit"} className="btn btn-primary float-right">Edit</Link>
    </div>
</div>
}
export default BookListItem;