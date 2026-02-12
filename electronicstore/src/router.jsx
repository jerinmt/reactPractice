import { createBrowserRouter } from "react-router-dom";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path : '/items' , element : <App/> },
    { path : '/items/create' , element : <AddItem/> },
    { path : '/items/:itemId/edit', element: <EditItem/>}
]);

export default router;