import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Login = lazy(() => import("./modules/Login/login"))
const SignUp = lazy(() => import("./modules/SignUp/signup"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
]);

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router}></RouterProvider>
        </Suspense>
    )
}

export default Routes;