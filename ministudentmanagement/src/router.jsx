import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path : '/login' , element : <Login/> },
    { path : '/register', element: <Register/>}
]);

export default router;