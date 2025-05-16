import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import LandingPage from "../pages/LandingPage";

const routes = createBrowserRouter([
    {
        path: '',
        element: <RootLayout />,
        errorElement: <div>Error!</div>,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    }
]);

export default routes;