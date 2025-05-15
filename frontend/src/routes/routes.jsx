import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Landing from "../pages/Landing";

const routes = createBrowserRouter([
    {
        path: '',
        element: <RootLayout />,
        errorElement: <div>Error!</div>,
        children: [
            {
                index: true,
                element: <Landing />
            }
        ]
    }
]);

export default routes;