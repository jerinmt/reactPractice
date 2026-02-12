import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

function ListItems() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    function fetchItems() {
        axios.get('https://worksheet-catalogue.mashupstack.com/products')
            .then(response => {
                setFilteredItems(response.data);
                setItems(response.data)
            })
    }
    useEffect(() => {
        fetchItems()
    }, []);
    const handleSearchInputChange = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };
    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.trim() === "") {
            setFilteredItems(items);
        } else {
            let filteredItems = items.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredItems(filteredItems);
        }
    };

    return (<div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-4">Electronic Store</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <form onSubmit={handleSearch} className="d-flex mb-4">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search items..."
                            value={searchTerm}
                            onChange={handleSearchInputChange}
                        />
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <Link to="/items/create" className="btn btn-info mb-2">Create Item</Link>
                    {filteredItems.length === 0 ? (
                        <p className="text-center">No items found.</p>
                    ) : (
                        filteredItems.map(item => <Item key={item.id} item={item} refresh={fetchItems} />)
                    )}
                </div>
            </div>
        </div>
    </div>)
}

export default ListItems;



