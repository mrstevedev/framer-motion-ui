import App from "@/App";
import { RouteObject } from "react-router-dom";
import Homepage from "@/views/home/Home";
import About from "@/views/about/About";
import Login from "@/views/login/Login";
import Register from "@/views/register/Register";
import Shop from "@/views/shop/Shop";
import ShopDetails from "@/views/shop/ShopDetails";
import NotFound from "@/components/NotFound/NotFound";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Homepage /> },
            { path: "/about", element: <About /> },
            { path: "/blog", element: <div>Blog</div> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/shop", element: <Shop /> },
            { path: "/shop/:name", element: <ShopDetails /> },
            { path: "*", element: <NotFound /> }
        ]
    }
];

export default routes;
