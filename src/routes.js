import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";

const BasicDetails = lazy(() => import("./modules/BasicDetails/BasicDetails"))
const Category = lazy(() => import("./modules/Category/Category"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasicDetails />,
    },
    {
        path: "/category",
        element: <Category />,
    },
]);

const Routes = () => {
    return (
        <LayoutStyled>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router}></RouterProvider>
            </Suspense>
        </LayoutStyled>
    )
}

export default Routes;

const LayoutStyled = styled.div`
max-width: 1300px;
margin: auto;
`