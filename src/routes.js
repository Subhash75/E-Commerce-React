import FallbackLoader from "components/Loaders/FallbackLoader";
import Navbar from "components/Navbar";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";

const BasicDetails = lazy(() => import("./modules/BasicDetails/BasicDetails"))
const Category = lazy(() => import("./modules/Category/Category"))
const ProductsPage = lazy(() => import("./modules/ProductsPage/index"))
const SeeDetails = lazy(() => import("./modules/SeeDetails/index"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <BasicDetails />,
    },
    {
        path: "/category",
        element: <Category />,
    },
    {
        path: "/products",
        element: <ProductsPage />,
    },
    {
        path: "/see-details",
        element: <SeeDetails />,
    },
]);

const Routes = () => {
    return (
        <LayoutStyled>
            <Suspense fallback={<FallbackLoader />}>
                <Navbar />
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