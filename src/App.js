import React, { useState } from 'react';
import "./index.css";
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals/Meals';
import Cart from './components/Cart/Cart/Cart';

function App() {
    const [isCartShown, setIsCartShown] = useState(false);

    const showCartHandler = () => {
        setIsCartShown(prev => !prev);
    };

    const closeCartHandler = () => {
        setIsCartShown(false);
    }

    return (
        <>
            {isCartShown && <Cart onCloseCart={closeCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </>
    );
}

export default App;
