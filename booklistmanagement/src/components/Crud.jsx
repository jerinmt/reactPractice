import React, { useState } from "react";

function Crud() {
  const [items, setItems] = useState([]);
  const [tempItems, setTempItems] = useState([]);

  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItemName, setEditedItemName] = useState("");
  const [editedItemAuthor, setEditedItemAuthor] = useState("");
  const [editedItemDate, setEditedItemDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleNameInputChange = (event) => {
    setBookName(event.target.value);
  };
  const handleAuthorInputChange = (event) => {
    setAuthorName(event.target.value);
  };
  const handleDateInputChange = (event) => {
    setPublishedDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let x = items.length + 1;
    if (bookName.trim() === "" || authorName.trim() === "" || publishedDate.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    let newItem = {
      id: x,
      name: bookName,
      author: authorName,
      publishedDate: publishedDate
    };
    setItems([...items, newItem]);
    setBookName(" ");
    setAuthorName(" ");
    setPublishedDate(" ");
  };

  const handleEditItem = (item) => {
    setEditingItemId(item.id);
    setEditedItemName(item.name);
    setEditedItemAuthor(item.author);
    setEditedItemDate(item.publishedDate);
  };

  const handleSaveItem = () => {
    if (editedItemName.trim() !== "" && editedItemAuthor.trim() !== "" && editedItemDate.trim() !== "") {
      const updatedItems = items.map((item) => {
        if (item.id === editingItemId) {
          return { ...item, name: editedItemName, author: editedItemAuthor, publishedDate: editedItemDate };
        }
        return item;
      });
      setItems(updatedItems);
      setEditingItemId(null);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditedItemName("");
  };


  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };


  const handleSearch = (event) => {
    event.preventDefault();
    setTempItems(items);
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    setItems(tempItems);
  };

  return (
    <div className="container-fluid vh-100">
        <div className="row h-25" >
          <div className="col">
            <button className="btn btn-info mx-auto d-block" onClick={handleResetSearch}>All books</button>
            <h2>Create</h2>
            <form onSubmit={handleSubmit}>
              <label>Book's name
                <input type="text" value={bookName} onChange={handleNameInputChange} />
              </label>              
                <label>Author's name
                  <input type="text" value={authorName} onChange={handleAuthorInputChange} />
                </label>              
                <label>Published on
                  <input type="date" value={publishedDate} onChange={handleDateInputChange} />
                </label>          
                <button className="btn btn-small btn-success" type="submit">Add Book</button>
            </form>
          </div>
        </div>
      <div className="row h-50">
        <div className="col">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Book</th>
              <th>Author</th>
              <th>Published Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {(items.length === 0) ? (
              <tr>
                <td colSpan="5" className="text-center">No books available</td>
              </tr>
            ) : 
              items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {editingItemId === item.id ? (
                      <input
                      type="text"
                      value={editedItemName}
                      onChange={(e) => setEditedItemName(e.target.value)}
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td>
                  {editingItemId === item.id ? (
                    <input
                      type="text"
                      value={editedItemAuthor}
                      onChange={(e) => setEditedItemAuthor(e.target.value)}
                    />
                  ) : (
                    item.author
                  )}
                </td>
                <td>
                  {editingItemId === item.id ? (
                    <input
                      type="date"
                      value={editedItemDate}
                      onChange={(e) => setEditedItemDate(e.target.value)}
                    />
                  ) : (
                    item.publishedDate
                  )}
                </td>
                <td>
                  {editingItemId === item.id ? (
                    <>
                      <button
                        className="btn btn-primary mr-2"
                        onClick={handleSaveItem}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary mr-2"
                        onClick={() => handleEditItem(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
        <div className="row h-25">
          <div className="col">
            <form onSubmit={handleSearch}>
              <label>Search Name: </label>
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />&nbsp;
              <button className="btn btn-small btn-success" type="submit">Search</button>&nbsp;
            </form>
          </div>
        </div>
      </div>
  );
}

export default Crud;