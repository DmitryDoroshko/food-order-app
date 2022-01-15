import React from 'react';
import "./index.css";
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals/Meals';
import Cart from './components/Cart/Cart/Cart';

function App() {
    return (
        <>
            <Cart />
            <Header />
            <main>
                <Meals />
            </main>
        </>
    );
}

export default App;
