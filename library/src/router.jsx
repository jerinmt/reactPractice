import { createBrowserRouter } from "react-router-dom";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path : '/books' , element : <App/> },
    { path : '/books/create' , element : <AddBook/> },
    { path : '/books/:bookId/edit', element: <EditBook/>}
]);

export default router;