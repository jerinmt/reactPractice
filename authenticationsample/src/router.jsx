import { createBrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: '/register', element: <Register/> },
    { path: '/login', element: <Login/>},
]);

export default router;