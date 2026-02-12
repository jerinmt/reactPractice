import axios from "axios";
import { Link } from "react-router-dom";

function Item(props) {
    function deleteItem() {
        axios.delete('https://worksheet-catalogue.mashupstack.com/products/'+props.item.id).then(response=>{
            alert(response.data.message)
            props.refresh()
        })
    }
    return <div className="card">
    <div className="card-body">
        <p>Item: {props.item.name}</p>
        <p>Category: {props.item.category}</p>
        <p>Price: {props.item.price}</p>
        <p>Quantity: {props.item.quantity}</p>
        <button className="btn btn-primary float-right" onClick={deleteItem}>Delete</button>
        <Link to={"/items/"+props.item.id+"/edit"} className="btn btn-primary float-right">Edit</Link>
    </div>
</div>
}
export default Item;