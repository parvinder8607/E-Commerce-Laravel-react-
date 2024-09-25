import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';
import Layout from "./Page/Layout";
import Home from "./Page/Home";
import { SearchProvider } from "./Context/SearchContext";
import Detail from "./Page/Detail";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Page/Cart";
import AddProduct from "./Page/AddProduct";



const router = new createBrowserRouter(
  [
    {
      path: "/",
      element: (
                <CartProvider>
                <SearchProvider>
                <Layout />
                </SearchProvider>
                </CartProvider>),
      children: [
        { index: true, element: <Home /> },
        { path: "/detail", element: <Detail />},
        { path: "/cart", element: <Cart />},
        { path: "/addProduct",element: <AddProduct />}
      
      ]
    },
  
  ]
)


export default function App() {
  return <RouterProvider router={router} />;
  
};
