import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import ResturantMenu from "./Components/ResturantMenu";


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/resturant/:resId",
                element: <ResturantMenu />,
            }
        ],
        errorElement: <Error />

    },


])

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<RouterProvider router={appRouter} />);


