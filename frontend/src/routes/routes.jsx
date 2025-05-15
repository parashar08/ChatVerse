import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: '',
        element: <RootLayout />,
        errorElement: <div>Error!</div>,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]);

export default routes;