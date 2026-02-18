//routing for all pages
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import App from "../App";
import Profile from "../components/Profile";
import Error from "../components/Error";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path : '/login' , element : <Login/> },
    { path : '/register', element: <Register/>},
    { path : '/profile', element: <Profile/>},
    { path: '*', element: <Error /> },
]);

export default router;