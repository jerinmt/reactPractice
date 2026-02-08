import { createBrowserRouter } from "react-router-dom";
import Greetings from "./components/Greetings";
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'student/:name', element: <Greetings/>},
]);

export default router;