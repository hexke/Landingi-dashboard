import './App.css';
import Cart from './components/cart/cart';
import Chart from './components/chart/chart';
import Header from './components/header/header';
import Sidenav from './components/sidenav/sidenav';

function App() {
    return (
        <div className="App">
            <Header />
            <Cart />
            <Chart />
            <Sidenav />
        </div>
    );
}

export default App;
