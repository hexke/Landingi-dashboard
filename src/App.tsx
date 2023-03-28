import './App.css';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import Layout from './components/layout/layout';
import CartDetailsPage, { cartDetailsLoader } from './components/pages/cartDetailsPage';
import HomePage, { homePageLoader } from './components/pages/homePage';
import { Chart as ChartJS, Tooltip, Legend, LinearScale, PointElement, CategoryScale, LineElement } from 'chart.js';
import { AddCartPage } from './components/pages/addCartPage';
import ErrorBoundary from './components/error/errorBoundary';

ChartJS.register(Tooltip, Legend, LinearScale, PointElement, CategoryScale, LineElement);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                loader: async () => redirect("/carts"),
            },
            {
                index: true,
                path: "/carts",
                element: <HomePage />,
                loader: homePageLoader,
                errorElement: <ErrorBoundary />
            },
            {
                path: "/carts/add",
                element: <AddCartPage />,
                errorElement: <ErrorBoundary />
            },
            {
                path: "/carts/:cartId",
                element: <CartDetailsPage />,
                loader: cartDetailsLoader,
                errorElement: <ErrorBoundary />
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
