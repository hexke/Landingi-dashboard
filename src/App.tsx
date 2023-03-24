import './App.css';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import Layout from './components/layout/layout';
import CartDetailsPage, { loader } from './components/pages/cartDetails';
import HomePage from './components/pages/home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                loader: async () => redirect("/carts"),
            },
            {
                index: true,
                path: "/carts",
                element: <HomePage />,
            },
            {
                path: "/carts/:cartId",
                element: <CartDetailsPage />,
                loader: loader
            }
        ]
    }

]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
