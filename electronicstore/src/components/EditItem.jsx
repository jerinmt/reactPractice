import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditItem() {
    const {itemId} = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get('https://worksheet-catalogue.mashupstack.com/products/'+itemId).then(response=>{
            setName(response.data.name);
            setPrice(response.data.price);
            setCategory(response.data.category);
            setQuantity(response.data.quantity);
        })
        .catch(error=>{
            alert(error.response.data.message);
        })
    },[itemId]);
    function updateItem(){
        axios.put('https://worksheet-catalogue.mashupstack.com/products/'+itemId,{
            name: name,
            price: price,
            category: category,
            quantity: quantity
        }).then(response=>{
            alert(response.data.message)
        })
        navigate('/items');
    }
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Edit Item</h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(event)=>{setName(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        value={price} 
                        onChange={(event)=>{setPrice(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={category} 
                        onChange={(event)=>{setCategory(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity:</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        value={quantity} 
                        onChange={(event)=>{setQuantity(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={updateItem}>Submit</button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}

export default EditItem;